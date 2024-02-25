<template>
  <div v-if="loading">
    <scaling-squares-spinner />
  </div>
  <div v-else>
    <div id="page-wrap" v-if="product">
      <ProductDetails :product="product" />
    </div>
    <NotFoundPage v-else />
  </div>
</template>
<script>
import axios from "axios";
import NotFoundPage from "./NotFoundPage.vue";
import ProductDetails from "../components/ProductDetails.vue";
import { ScalingSquaresSpinner } from "epic-spinners";
export default {
  name: "BookDetailPage",
  data() {
    return {
      product: {},
      showSuccessMessage: false,
      loading: true,
    };
  },
  components: { NotFoundPage, ScalingSquaresSpinner, ProductDetails },
  async created() {
    let book = undefined;
    try {
      const result = await axios.get(`/api/books/${this.$route.params.id}`);
      book = result.data;
    } catch (e) {
      console.error(`Error: ${e.message}`);
    } finally {
      this.loading = false;
    }
    this.product = book;
  },
};
</script>

<style scoped>
#page-wrap {
  background-color: var(--medium-blue);
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#page-wrap *:not(button) {
  background-color: inherit;
}

#img-wrap {
  text-align: center;
}

img {
  width: 250px;
}

#product-details {
  padding: 16px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    "title title"
    "author author"
    "rating price"
    "button button"
    "description description";
}

#add-to-cart {
  margin: 10px 0;
  grid-area: button;
}

#title {
  grid-area: title;
}

#author {
  grid-area: author;
  margin: 0;
}

#description {
  grid-area: description;
}

#rating {
  align-self: self-end;
  grid-area: rating;
}

#price {
  justify-self: self-end;
  grid-area: price;
}

.green-button {
  background-color: green;
}

.scaling-squares-spinner {
  margin-top: 15%;
}
</style>
