import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ArticleDetailView from '../views/ArticleDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [   
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/article/:slug',
      name: 'ArticleDetail',
      component: () => import('@/views/ArticleDetailView.vue'),
      props: route => ({
        slug: route.params.slug,
      })
    }
  ],
})

export default router
