<template>
  <div class="grid-item">
    <router-link class="link" :to="`/books/${product.id}`">
      <div class="product">
        <img :src="backend_url ? backend_url + product.imageUrl : product.imageUrl" />
        <h4 class="product-name">{{ product.name }}</h4>
        <p class="product-price">£{{ product.price }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
const backend_url = import.meta.env.VITE_BACKEND_URL;
export default {
  name: "ProductsGridItem",
  props: ["product"],
  data() {
    return {
      backend_url,
    };
  },
};
</script>
<style scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 15px 10px;
}

.product {
  background-color: var(--light-blue);
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  box-shadow: 0px 2px 5px #888;
  height: 100%;
  width: 100%;
}

.product:hover {
  transform: scale(1.1);
  background-color: var(--medium-blue);
}

.product-name {
  background-color: inherit;
}
.product-price {
  background-color: inherit;
  margin-top: auto;
}

.link {
  text-decoration: none;
  color: inherit;
}

img {
  height: 300px;
  width: 200px;
}

a {
  height: 100%;
  width: 100%;
}
</style>
