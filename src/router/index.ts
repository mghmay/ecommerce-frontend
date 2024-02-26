import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '@/views/CartPage.vue'
import BookDetailPage from '@/views/BookDetailPage.vue'
import BooksPage from '@/views/BooksPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import GenrePage from '@/views/GenrePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/books',
      name: 'books',
      component: BooksPage
    },
    {
      path: '/genres/:genre',
      name: 'genres',
      component: GenrePage
    },
    {
      path: '/books/:id',
      name: 'BookDetail',
      component: BookDetailPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartPage
    },
    {
      path: '/',
      redirect: '/books'
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage
    }
  ]
})

export default router
