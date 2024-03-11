<template>
  <div v-if="loading">
    <scaling-squares-spinner />
  </div>
  <div v-else>
    <div v-if="filteredBooks.length > 0">
      <div id="page-wrap">
        <ProductsGrid :products="filteredBooks" />
      </div>
    </div>
    <div v-else><NotFoundPage title="No books to be found!" /></div>
  </div>
</template>
<script>
import { get } from "@/api";
import ProductsGrid from "@/components/ProductsGrid.vue";
import { ScalingSquaresSpinner } from "epic-spinners";
import NotFoundPage from "./NotFoundPage.vue";

export default {
  name: "BooksPage",
  data() {
    return {
      books: [],
      loading: true,
      searchQuery: this.$route.query.search,
    };
  },
  computed: {
    filteredBooks() {
      if (!this.searchQuery) {
        return this.books;
      }
      return this.books.filter((book) =>
        book.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    $route(to, from) {
      if (to.query.search !== from.query.search) {
        this.searchQuery = to.query.search || "";
      }
    },
  },
  components: {
    ProductsGrid,
    ScalingSquaresSpinner,
    NotFoundPage,
  },
  async created() {
    await this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const { data } = await get(`/api/books`);
        this.books = data;
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        this.loading = false;
      }
    },

    filterBooks(name) {
      return (this.books = this.filter((book) => book.name.includes(name)));
    },
  },
};
</script>
