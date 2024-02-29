<template>
  <nav id="nav-bar">
    <router-link to="/books" id="books-link" @click="clearSearchVal">
      <h1>Foobar Bookshop</h1>
    </router-link>
    <div class="search-bar-wrapper">
      <SearchBar v-model="searchVal" @keyup.enter="submit(searchVal)" />
    </div>
    <AppDropdown :iterater="genres" class="">
      <template v-slot:toggler>
        <button class="nav-link-button">Genres</button>
      </template>
      <AppDropdownContent>
        <AppDropdownItem
          v-for="genre in genres"
          :key="genre"
          :link="`/genres/${genre}`"
          >{{ genre }}</AppDropdownItem
        >
      </AppDropdownContent>
    </AppDropdown>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </nav>
</template>
<script>
import AppDropdown from "../components/AppDropdown.vue";
import AppDropdownContent from "../components/AppDropdownContent.vue";
import AppDropdownItem from "../components/AppDropdownItem.vue";
import SearchBar from "./SearchBar.vue";
import axios from "axios";
export default {
  name: "NavBar",
  data() {
    return {
      genres: [],
      searchVal: "",
    };
  },
  components: {
    AppDropdown,
    AppDropdownContent,
    AppDropdownItem,
    SearchBar,
  },
  watch: {
    searchVal(newValue, oldValue) {
      if (oldValue && !newValue) {
        this.clearSearchVal();
      }
    },
  },
  async created() {
    const result = await axios.get(`/api/genres`);
    const genres = result.data;
    this.genres = genres;
  },
  methods: {
    submit(searchVal) {
      this.$router.push({ path: "/", query: { search: searchVal } });
    },
    clearSearchVal() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
#nav-bar {
  height: 75px;
  width: 100%;
  background-color: var(--medium-blue);
  display: flex;
  justify-content: end;
}
.search-bar-wrapper {
  margin: auto 10px;
}

.nav-link-button {
  background-color: var(--medium-dark-blue);
  height: 100%;
  border-radius: 0;
  margin-right: 5px;
}

#nav-bar *:not(button) {
  background-color: inherit;
}

#books-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}

#books-link h1 {
  margin: 0;
}

#cart-link {
  margin: auto 5px;
}
</style>
