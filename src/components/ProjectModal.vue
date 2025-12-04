<template>
 <transition name="fade">
  <div v-if="isOpen && project" class="fixed inset-0 z-50 flex items-center justify-center">
   <div class="absolute inset-0 bg-black/50" @click="onClose"></div>

   <div
    class="relative z-10 max-w-4xl w-full mx-4 sm:mx-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
    <div class="flex justify-between items-start p-4 border-b border-neutral-200 dark:border-neutral-800">
     <div>
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">{{ project.title }}</h3>
      <div class="text-sm text-neutral-500 dark:text-neutral-400 mt-1 flex gap-3">
       <span v-if="project.year">{{ project.year }}</span>
       <span v-if="project.category" class="capitalize">{{ project.category }}</span>
      </div>
     </div>

     <button @click="onClose" aria-label="Close"
      class="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-neutral-700 dark:text-neutral-200" fill="none"
       viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
     </button>
    </div>

    <div class="p-4">
     <!-- Media area -->
     <div>
      <template v-if="project.videoSrc">
       <video :src="project.videoSrc" controls playsinline autoplay muted
        class="w-full h-64 md:h-96 object-cover rounded-md bg-black">
        Your browser does not support the video tag.
       </video>
      </template>

      <template v-else>
       <img :src="currentImage" :alt="project.title"
        class="w-full h-64 md:h-96 object-cover rounded-md bg-neutral-200" />

       <!-- Thumbnails if multiple images -->
       <div v-if="images.length > 1" class="mt-3 flex gap-2 overflow-x-auto">
        <button v-for="(img, idx) in images" :key="idx" @click="currentIndex = idx"
         :class="['rounded-md overflow-hidden border', currentIndex === idx ? 'ring-2 ring-primary' : 'border-neutral-200 dark:border-neutral-700']">
         <img :src="img" :alt="project.title + ' - ' + idx" class="w-20 h-12 object-cover" />
        </button>
       </div>
      </template>
     </div>

     <!-- Details -->
     <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
       <p class="text-neutral-700 dark:text-neutral-200">{{ project.description }}</p>
       <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">{{ project.details }}</p>
       <div class="mt-3 flex flex-wrap gap-2">
        <span v-for="(t, i) in project.technologies || []" :key="i"
         class="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded">
         {{ t }}
        </span>
       </div>
      </div>

      <div class="flex flex-col gap-3">
       <a v-if="project.url" :href="project.url" target="_blank" rel="noopener"
        class="inline-flex items-center justify-center w-full py-2 px-3 bg-primary text-white rounded-md hover:opacity-95">
        Voir le projet
       </a>

       <button @click="onClose" class="w-full py-2 px-3 border border-neutral-200 dark:border-neutral-700 rounded-md">
        Fermer
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 </transition>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import type { Project } from '../types/project'

export default defineComponent({
 name: 'ProjectModal',

 props: {
  project: {
   type: Object as () => Project | null,
   default: null,
  },
  isOpen: {
   type: Boolean,
   default: false,
  },
 },

 emits: ['close'],

 setup(props, { emit }) {
  const currentIndex = ref(0)

  const images = computed(() => {
   if (!props.project) return []
   const src = props.project.imageSrc
   if (Array.isArray(src)) return src
   return src ? [src] : []
  })

  const currentImage = computed(() => images.value[currentIndex.value] || '')

  watch(
   () => props.project,
   () => {
    currentIndex.value = 0
   }
  )

  const onClose = () => emit('close')

  return {
   currentIndex,
   images,
   currentImage,
   onClose,
  }
 },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
 transition: opacity .2s;
}

.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
</style>
