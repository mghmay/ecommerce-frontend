<template>
  <div v-for="product in products" :key="product.id" class="product-container">
    <ProductListItem :product="product" />
  </div>
</template>
<script>
import ProductListItem from '@/components/ProductsListItem.vue'
export default {
  name: 'ProductsList',
  props: ['products'],
  components: {
    ProductListItem
  }
}
</script>
<style>
.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
</style>
