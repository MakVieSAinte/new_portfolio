import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import LabsView from '../views/LabsView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import NotFoundView from '../views/NotFoundView.vue'
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
      path: '/labs',
      name: 'labs',
      component: LabsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/article/:slug',
      name: 'ArticleDetail',
      component: () => import('@/views/ArticleDetailView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

// Smooth scroll to top on route change using Lenis if available
router.afterEach(() => {
  if (typeof window === 'undefined') return
  const lenis: any = (window as any).lenis
  if (lenis && typeof lenis.scrollTo === 'function') {
    // Small timeout to ensure the new view is mounted
    setTimeout(() => {
      lenis.scrollTo(0, { immediate: false })
    }, 0)
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
})

export default router
