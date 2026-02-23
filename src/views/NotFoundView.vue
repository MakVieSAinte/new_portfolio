<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from '../composables'

const router = useRouter()
const { texts } = useI18n('404')

const goHome = () => {
  router.push('/')
}

</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900">
    <div class="max-w-2xl w-full space-y-8 px-4">
      <!-- Decorative Code Blocks -->
      <div class="grid md:grid-cols-4 gap-4 flex-col">
        <div class="p-4 bg-slate-100 dark:bg-neutral-800 rounded-lg border border-slate-200 dark:border-neutral-700">
          <p class="text-sm font-mono text-slate-600 dark:text-slate-400 overflow-x-auto leading-relaxed">
            <span class="text-red-600 dark:text-red-400">console</span><span
              class="text-slate-600 dark:text-slate-400">.</span><span
              class="text-yellow-600 dark:text-yellow-400">log</span>(<span
              class="text-green-600 dark:text-green-400">"{{ texts['404']?.error ?? '404' }}"</span>);
          </p>
          <p class="text-sm font-mono text-slate-600 dark:text-slate-400 overflow-x-auto leading-relaxed mt-2">
            <button @click="goHome"
              class="hover:underline text-blue-600 dark:text-blue-400 cursor-pointer">{{ texts['404']?.clicked ?? 'goHome()' }}</button><span
              class="text-slate-600 dark:text-slate-400">; <span class="text-gray-500 dark:text-gray-500 px-1"> //
                {{ texts['404']?.hint ?? 'Click here' }}</span></span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
