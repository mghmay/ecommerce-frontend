<template>
  <SearchInput v-model="searchVal" />
</template>

<script>
import { ref } from "vue";
import SearchInput from "vue-search-input";
import "vue-search-input/dist/styles.css";

const searchVal = ref("");

export default {
  name: "SearchBar",
  components: {
    SearchInput,
  },
  setup() {
    return {
      searchVal,
    };
  },
};
</script>

<style>
.search-input-wrapper .search-icon {
  background-color: white;
}
</style>
