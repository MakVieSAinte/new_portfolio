<template>
  <transition name="fade" @enter="onEnter" @leave="onLeave">
    <div v-if="isLoading" class="fixed inset-0 bg-white dark:bg-neutral-950 z-50 flex items-center justify-center"
      style="z-index: 9999999999999999999999999999999999999px !important">
      <div class="flex flex-col items-center gap-6">
        <!-- Animated loader (bars) -->
        <!-- <div class="loader" aria-hidden="true"></div> -->

        <!-- Dynamic messages -->
        <div class="text-center">
          <p class="text-sm font-mono text-emerald-500 dark:text-emerald-400">
            {{ messages[currentMessage].main }}
          </p>
          <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
            {{ messages[currentMessage].sub }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingScreen',
  data() {
    return {
      isLoading: true,
      currentMessage: 0,
      // messages for FR and EN — will pick based on document language
      messagesMap: {
        fr: [
          { main: 'git init portfolio', sub: 'Initialisation du projet...' },
          { main: 'npm install components', sub: 'Chargement des éléments UI...' },
          { main: 'make build-assets', sub: 'Optimisation des images et icônes...' },
          { main: 'npx check-quality', sub: 'Vérification du code (ESLint)...' },
          { main: 'connect database', sub: 'Établissement de la connexion...' },
          { main: 'docker-compose up"', sub: "Déploiement de l'expérience..." },
          { main: 'npm start', sub: 'Lancement du portfolio...' }
        ],
        en: [
          { main: 'git init portfolio', sub: 'Initializing the project...' },
          { main: 'npm install components', sub: 'Loading UI components...' },
          { main: 'make build-assets', sub: 'Optimizing images and icons...' },
          { main: 'npx check-quality', sub: 'Running code quality checks...' },
          { main: 'connect database', sub: 'Establishing connection...' },
          { main: 'docker-compose up', sub: 'Deploying the experience...' },
          { main: 'npm start', sub: 'Launching the portfolio...' }
        ],
      },
      // default messages to avoid undefined during initial render
      messages: [
        { main: 'git init portfolio', sub: "Initialisation du dépôt..." },
      ],
    }
  },
  mounted() {
    // Determine locale (fall back to fr)
    const langAttr = document.documentElement.lang || navigator.language || 'fr'
    const lang = String(langAttr).toLowerCase().startsWith('en') ? 'en' : 'fr'
    // Bind messages array for easier template access
    // @ts-ignore
    this.$data.messages = this.messagesMap[lang]

    // Randomized message rotation: change message a few times then stop
    const minChanges = 3
    const maxChanges = 8
    const totalChanges = Math.floor(Math.random() * (maxChanges - minChanges + 1)) + minChanges
    let changes = 0

    const nextInterval = () => Math.floor(Math.random() * 500) + 400 // 400-900ms

    let timerId: any = null

    const rotate = () => {
      // advance index cyclically
      this.currentMessage = (this.currentMessage + 1) % this.messages.length
      changes++
      if (changes >= totalChanges) {
        clearTimeout(timerId)
        return
      }
      timerId = setTimeout(rotate, nextInterval())
    }

    // start rotation
    timerId = setTimeout(rotate, nextInterval())

    // Afficher le loader pendant au minimum 1.8 secondes
    const minimumLoadTime = 1800

    // Vérifier si la page est complètement chargée
    const hideLoaderWhenReady = () => {
      setTimeout(() => {
        this.isLoading = false
        // notify other components
        window.dispatchEvent(new CustomEvent('loadingScreenComplete'))
      }, minimumLoadTime)
    }

    // Si la page est déjà prête
    if (document.readyState === 'complete') {
      hideLoaderWhenReady()
    } else {
      // Sinon, attendre que tout se charge
      window.addEventListener('load', hideLoaderWhenReady)
    }
  },
  methods: {
    onEnter(el: any) {
      el.style.opacity = '1'
    },
    onLeave(el: any) {
      el.style.opacity = '0'
      el.style.transition = 'opacity 0.5s ease-out'
    },
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loader animation */
.loader {
  width: 120px;
  height: 20px;
  background:
    linear-gradient(#10b981 50%, #0000 0),
    linear-gradient(#0000 50%, #10b981 0),
    linear-gradient(#10b981 50%, #0000 0),
    linear-gradient(#0000 50%, #10b981 0),
    linear-gradient(#10b981 50%, #0000 0),
    linear-gradient(#0000 50%, #10b981 0) #e5e7eb;
  background-size: calc(100%/6 + 1px) 200%;
  background-repeat: no-repeat;
  animation: l12 2s infinite;
}

@keyframes l12 {
  0% {
    background-position: calc(0*100%/5) 100%, calc(1*100%/5) 0%, calc(2*100%/5) 100%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0%
  }

  16.67% {
    background-position: calc(0*100%/5) 0%, calc(1*100%/5) 0%, calc(2*100%/5) 100%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0%
  }

  33.33% {
    background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 100%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0%
  }

  50% {
    background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 0%, calc(4*100%/5) 100%, calc(5*100%/5) 0%
  }

  66.67% {
    background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 100%, calc(4*100%/5) 100%, calc(5*100%/5) 0%
  }

  83.33% {
    background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 100%, calc(4*100%/5) 0%, calc(5*100%/5) 0%
  }

  100% {
    background-position: calc(0*100%/5) 0%, calc(1*100%/5) 100%, calc(2*100%/5) 0%, calc(3*100%/5) 100%, calc(4*100%/5) 0%, calc(5*100%/5) 100%
  }
}

@media (prefers-color-scheme: dark) {
  .loader {
    background:
      linear-gradient(#10b981 50%, #0000 0),
      linear-gradient(#0000 50%, #10b981 0),
      linear-gradient(#10b981 50%, #0000 0),
      linear-gradient(#0000 50%, #10b981 0),
      linear-gradient(#10b981 50%, #0000 0),
      linear-gradient(#0000 50%, #10b981 0) #1f2937;
  }
}
</style>
