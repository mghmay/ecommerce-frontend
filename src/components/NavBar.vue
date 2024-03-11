<template>
  <CNavbar expand="lg" class="medium-blue-bg">
    <CContainer fluid class="inherit-bg">
      <router-link to="/books" id="books-link" @click="clearSearchVal" class="inherit-bg">
        <h1 class="inherit-bg">Foobar Bookshop</h1>
      </router-link>
      <CNavbarNav class="inherit-bg">
        <CForm @submit="submit" id="search-area" class="d-flex inherit-bg">
          <CFormInput
            type="search"
            class="me-2"
            placeholder="Search"
            v-model="searchVal"
          />
          <CButton type="submit" color="success" variant="outline" class="dark-blue-bg"
            >Search</CButton
          >
        </CForm>
        <CDropdown variant="nav-item" class="v-dark-blue-bg" id="dropdown">
          <CDropdownToggle color="white">Genres</CDropdownToggle>
          <CDropdownMenu>
            <router-link
              class="dropdown-item"
              v-for="genre in genres"
              :key="genre"
              :to="`/genres/${genre}`"
              >{{ genre }}</router-link
            >
          </CDropdownMenu>
        </CDropdown>
        <router-link to="/cart" class="inherit-bg">
          <button class="main-button">Shopping Cart</button>
        </router-link>
      </CNavbarNav>
    </CContainer>
  </CNavbar>
</template>
<script>
import {
  CContainer,
  CNavbarNav,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CNavbar,
  CFormInput,
  CButton,
  CForm,
} from "@coreui/vue";
import { get } from "@/api";
import "@coreui/coreui/dist/css/coreui.min.css";

export default {
  name: "NavBar",
  data() {
    return {
      genres: [],
      searchVal: "",
    };
  },
  components: {
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CContainer,
    CNavbarNav,
    CNavbar,
    CFormInput,
    CButton,
    CForm,
  },
  watch: {
    searchVal(newValue, oldValue) {
      if (oldValue && !newValue) {
        this.clearSearchVal();
      }
    },
  },
  async created() {
    const result = await get(`/api/genres`);
    const genres = result.data;
    this.genres = genres;
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$router.push({ path: "/", query: { search: this.searchVal } });
    },
    clearSearchVal() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
#search-area {
  padding: 6px;
}

#dropdown {
  margin: auto 15px;
}

.nav-link {
  color: white;
}
</style>
