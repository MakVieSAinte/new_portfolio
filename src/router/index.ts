import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
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
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/article/:slug',
      name: 'ArticleDetail',
      component: () => import('@/views/ArticleDetailView.vue'),
      props: true
    }
  ],
})

export default router
