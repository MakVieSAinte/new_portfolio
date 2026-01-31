import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'preline/preline'
import './main.css'
import './output.css'
import './assets/css/preline.css'
import './assets/js/preline.js'
import RevealDirective from './directives/reveal'

// Import Vercel Analytics - loads client-side only
if (typeof window !== 'undefined') {
  import('@vercel/analytics')
    .then(({ inject }) => {
      inject()
    })
    .catch(err => {
      console.warn('Vercel Analytics not available:', err)
    })
}

const app = createApp(App)

const savedTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.classList.toggle('light', savedTheme === 'light')

app.use(createPinia())
app.use(router)
app.directive('reveal', RevealDirective)

app.mount('#app')

// Initialize Lenis smooth scrolling on client, respecting reduced motion
if (typeof window !== 'undefined') {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (!reduceMotion.matches) {
    import('lenis')
      .then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.5,
          smoothWheel: true,
          smoothTouch: false,
          easing: (t: number) => Math.min(2, 1.001 - Math.pow(2, -10 * t)),
          lerp: 0.05,
          wheelMultiplier: 0.2,
          touchMultiplier: 1.0,
        })
        ;(window as any).lenis = lenis

        const raf = (time: number) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      })
      .catch(err => console.warn('Lenis not available:', err))
  }
}
