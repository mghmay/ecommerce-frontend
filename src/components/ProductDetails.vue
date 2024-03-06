<template>
  <div id="product-wrap">
    <div id="img-wrap">
      <img :src="backend_url ? backend_url + product.imageUrl : product.imageUr" />
    </div>
    <div id="product-details">
      <h1 id="title">{{ product.name }}</h1>
      <h3 id="author">Author: {{ product.author }}</h3>
      <h3 id="price">£{{ product.price }}</h3>
      <p id="rating">Average rating: {{ product.averageRating }}</p>
      <button id="add-to-cart" v-on:click="addToCart" v-if="!showSuccessMessage">
        Add to cart
      </button>
      <button id="add-to-cart" class="green-button" v-else>
        Successfully added to cart
      </button>
      <div id="description">
        <h4>Description</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { post } from "@/api";
const backend_url = import.meta.env.VITE_BACKEND_URL;
export default {
  name: "ProductDetails",
  data() {
    return {
      showSuccessMessage: false,
      backend_url,
    };
  },
  props: ["product"],
  methods: {
    async addToCart() {
      await post("/api/users/12345/cart", { bookId: this.$route.params.id });
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 1000);
    },
  },
};
</script>

<style scoped>
#product-wrap *:not(button) {
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
</style>
