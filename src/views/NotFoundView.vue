<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900">
    <div class="max-w-2xl w-full space-y-8 px-4">
      <!-- 404 Header -->
      <div class="text-center space-y-2">
        <h1 class="text-9xl md:text-10xl font-black font-familjen_grotesk text-primary">
          404
        </h1>
        <p class="text-2xl md:text-3xl font-familjen_grotesk font-bold text-slate-900 dark:text-white">
          Page non trouvée
        </p>
      </div>

      <!-- Decorative Code Blocks -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-slate-100 dark:bg-neutral-800 rounded-lg border border-slate-200 dark:border-neutral-700">
          <p class="text-xs font-mono text-slate-600 dark:text-slate-400 overflow-x-auto leading-relaxed">
            <span class="text-red-600 dark:text-red-400">console</span><span
              class="text-slate-600 dark:text-slate-400">.</span><span
              class="text-yellow-600 dark:text-yellow-400">log</span>(<span
              class="text-green-600 dark:text-green-400">"Cette page n'existe pas"</span>);
          </p>
        </div>
        <div class="p-4 bg-slate-100 dark:bg-neutral-800 rounded-lg border border-slate-200 dark:border-neutral-700">
          <p class="text-xs font-mono text-slate-600 dark:text-slate-400 overflow-x-auto leading-relaxed">
            <button @click="goHome"
              class="hover:underline text-blue-600 dark:text-blue-400 cursor-pointer">goHome()</button><span
              class="text-slate-600 dark:text-slate-400">; <span class="text-gray-500 dark:text-gray-500 px-1"> //
                Clique
                ici</span></span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse-slow {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin-reverse-slow 12s linear infinite;
}
</style>
