<template>
  <div class="grid-wrap">
    <ProductsGridItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
<script>
import ProductsGridItem from "./ProductsGridItem.vue";
export default {
  name: "ProductsGrid",
  props: ["products"],
  components: { ProductsGridItem },
};
</script>
<style scoped>
.grid-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 16px;
}
</style>
