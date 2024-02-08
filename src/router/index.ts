import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '@/views/CartPage.vue'
import ProductDetailPage from '@/views/ProductDetailPage.vue'
import ProductsPage from '@/views/ProductsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'Products',
      component: ProductsPage
    },
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetailPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartPage
    }
  ]
})

export default router
