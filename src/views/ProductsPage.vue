<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>
<script>
import ProductsGrid from '@/components/ProductsGrid.vue'
import { products } from '@/fake-data'

export default {
  name: 'ProductsPage',
  data() {
    return {
      products
    }
  },
  components: {
    ProductsGrid
  }
}
</script>
