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
import axios from "axios";
import ProductsGrid from "@/components/ProductsGrid.vue";
import { ScalingSquaresSpinner } from "epic-spinners";

export default {
  name: "BooksPage",
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
    const result = await axios.get("/api/books");
    const books = result.data;
    this.books = books;
    this.loading = false;
  },
};
</script>
