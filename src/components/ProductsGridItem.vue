<template>
  <div class="grid-item">
    <router-link class="link" :to="`/products/${product.id}`">
      <div class="product">
        <img :src="product.imageUrl" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ProductsGridItem",
  props: ["product"],
};
</script>
<style scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  margin: 2%;
  position: relative;
  width: 20%;
}

.product {
  background-color: var(--light-blue);
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  box-shadow: 0px 2px 5px #888;
  height: 100%;
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
  display: flex;
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

button {
  width: 100%;
}
</style>
