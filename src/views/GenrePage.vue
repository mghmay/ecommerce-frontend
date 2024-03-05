<template>
  <div v-if="loading">
    <scaling-squares-spinner />
  </div>
  <div v-else>
    <div id="page-wrap">
      <ProductsGrid :products="books" />
    </div>
  </div>
</template>
<script>
import { get } from "@/api";
import ProductsGrid from "@/components/ProductsGrid.vue";
import { ScalingSquaresSpinner } from "epic-spinners";

export default {
  name: "GenrePage",
  data() {
    return {
      books: [],
      loading: true,
    };
  },
  components: {
    ProductsGrid,
    ScalingSquaresSpinner,
  },
  async created() {
    await this.fetchBooks();
  },
  watch: {
    $route(to, from) {
      if (to.params.genre !== from.params.genre) {
        this.fetchBooks();
      }
    },
  },
  methods: {
    async fetchBooks() {
      const genre = this.$route.params.genre;

      const result = await get(`/api/books/genre/${genre}`);

      const books = result.data;
      this.books = books;
      this.loading = false;
    },
  },
};
</script>
