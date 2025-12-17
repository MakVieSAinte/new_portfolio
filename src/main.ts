import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'preline/preline'
import './main.css'
import './output.css'
import './assets/css/preline.css'
import './assets/js/preline.js'

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

app.mount('#app')
