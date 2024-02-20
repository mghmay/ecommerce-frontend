<template>
  <div v-if="products.length > 0">
    <div v-for="item in products" :key="item.product.id" class="product-container">
      <ProductListItem
        :product="item.product"
        :amount="item.amount"
        v-on:remove-from-cart="$emit('remove-from-cart', $event)"
        v-on:add-to-cart="$emit('add-to-cart', $event)"
      />
    </div>
  </div>
  <div id="no-products-text" v-else>
    <h4>{{ noProductsText ? noProductsText : 'Nothing to see here' }}</h4>
  </div>
</template>
<script>
import ProductListItem from '@/components/ProductsListItem.vue'
export default {
  name: 'ProductsList',
  props: ['products', 'noProductsText'],
  components: {
    ProductListItem
  }
}
</script>
<style scoped>
.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
#no-products-text {
  text-align: center;
}
</style>
