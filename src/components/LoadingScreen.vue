<template>
  <transition name="fade" @enter="onEnter" @leave="onLeave">
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-white dark:bg-neutral-950 z-50 flex items-center justify-center"
    >
      <div class="flex flex-col items-center gap-6">
        <!-- Animated loader -->
        <div class="relative w-16 h-16">
          <div
            class="absolute inset-0 rounded-full border-4 border-neutral-200 dark:border-neutral-800"
          ></div>
          <div
            class="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 dark:border-t-blue-400 animate-spin"
          ></div>
        </div>

        <!-- Text -->
        <div class="text-center">
          <p class="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Chargement du portfolio...
          </p>
          <p class="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
            Préparation de votre expérience
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
    }
  },
  mounted() {
    // Afficher le loader pendant au minimum 1.7 secondes
    const minimumLoadTime = 1700

    // Vérifier si la page est complètement chargée
    const hideLoaderWhenReady = () => {
      setTimeout(() => {
        this.isLoading = false
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
</style>
