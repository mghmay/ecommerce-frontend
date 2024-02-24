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
  name: 'ProductsGridItem',
  props: ['product']
}
</script>
<style scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  margin: 2%;
  position: relative;
  width: 24%;
}

.product {
  background-color: var(--light-blue);
  padding: 20px;
  align-items: center;
  box-shadow: 0px 2px 5px #888;
}

.product:hover {
  transform: scale(1.1);
  background-color: var(--medium-blue);
}

.product-name {
  background-color: inherit;
  margin-bottom: 0;
}
.product-price {
  background-color: inherit;
  margin-bottom: 0;
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
  width: 100%;
}

button {
  width: 100%;
}
</style>
