<template>
  <div v-if="loading">
    <scaling-squares-spinner />
  </div>
  <div v-else>
    <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img :src="product.imageUrl" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">${{ product.price }}</h3>
        <p>Average rating: {{ product.averageRating }}</p>
        <button id="add-to-cart" v-on:click="addToCart" v-if="!showSuccessMessage">
          Add to cart
        </button>
        <button id="add-to-cart" class="green-button" v-else>
          Successfully added to cart
        </button>
        <h4>Description</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <NotFoundPage v-else />
  </div>
</template>
<script>
import axios from "axios";
import NotFoundPage from "./NotFoundPage.vue";
import { ScalingSquaresSpinner } from "epic-spinners";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {},
      showSuccessMessage: false,
      loading: true,
    };
  },
  methods: {
    async addToCart() {
      await axios.post("/api/users/12345/cart", { productId: this.$route.params.id });
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 1000);
    },
  },
  components: { NotFoundPage, ScalingSquaresSpinner },
  async created() {
    let product = undefined;
    try {
      const result = await axios.get(`/api/products/${this.$route.params.id}`);
      product = result.data;
    } catch (e) {
      console.error(`Error: ${e.message}`);
    } finally {
      this.loading = false;
    }
    this.product = product;
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
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 115px;
  right: 16px;
}
.green-button {
  background-color: green;
}

.scaling-squares-spinner {
  margin-top: 15%;
}
</style>
