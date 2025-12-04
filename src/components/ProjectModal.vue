<template>
 <transition name="modal">
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
   <!-- Backdrop -->
   <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>

   <!-- Modal Content -->
   <div
    class="relative bg-white dark:bg-neutral-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 dark:border-neutral-800">
    <!-- Close Button -->
    <button @click="closeModal"
     class="absolute top-4 right-4 z-10 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-all duration-200">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6 text-neutral-600 dark:text-neutral-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
     </svg>
    </button>

    <!-- Modal Body -->
    <div class="p-6 sm:p-8">
     <!-- Title -->
     <h2 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
      {{ project.title }}
     </h2>

     <!-- Meta Info (Year & Category) -->
     <div class="flex flex-wrap gap-3 mb-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-4 h-4 text-neutral-600 dark:text-neutral-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
       <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {{ project.year }}
       </span>
      </div>

      <div class="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-4 h-4 text-neutral-600 dark:text-neutral-400">
        <path stroke-linecap="round" stroke-linejoin="round"
         d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.883.883 2.318.883 3.201 0l6.665-6.665c.883-.883.883-2.318 0-3.201L10.159 3.659A2.25 2.25 0 009.568 3z" />
       </svg>
       <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {{ project.category }}
       </span>
      </div>
     </div>

     <!-- Main Image/Video Gallery -->
     <div class="mb-6">
      <!-- Video or Image -->
      <div class="bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden mb-4 h-96">
       <video v-if="project.videoSrc && useVideo" :src="project.videoSrc" class="w-full h-full object-cover" controls
        autoplay></video>
       <img v-else :src="currentImage" :alt="project.title" class="w-full h-full object-cover" />
      </div>

      <!-- Toggle Video/Image Button -->
      <div v-if="project.videoSrc && hasMultipleImages" class="flex gap-2 mb-4">
       <button @click="useVideo = true" :class="[
        'flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200',
        useVideo
         ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
         : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700',
       ]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 inline mr-2">
         <path d="M8 5v14l11-7z" />
        </svg>
        Vidéo
       </button>
       <button @click="useVideo = false" :class="[
        'flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200',
        !useVideo
         ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
         : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700',
       ]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 inline mr-2">
         <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
        Images
       </button>
      </div>

      <!-- Image Gallery -->
      <div v-if="!useVideo && hasMultipleImages" class="flex gap-2 overflow-x-auto pb-2">
       <button v-for="(img, index) in getImageArray" :key="index" @click="selectedImageIndex = index" :class="[
        'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200',
        selectedImageIndex === index
         ? 'border-neutral-900 dark:border-white'
         : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600',
       ]">
        <img :src="img" :alt="`Gallery ${index}`" class="w-full h-full object-cover" />
       </button>
      </div>
     </div>

     <!-- Description -->
     <div class="mb-6">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
       Description
      </h3>
      <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
       {{ project.description }}
      </p>
     </div>

     <!-- Details -->
     <div v-if="project.details" class="mb-6">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
       Détails
      </h3>
      <p class="text-neutral-700 dark:text-neutral-400 leading-relaxed">
       {{ project.details }}
      </p>
     </div>

     <!-- Technologies -->
     <div v-if="project.technologies && project.technologies.length > 0" class="mb-6">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
       Technologies
      </h3>
      <div class="flex flex-wrap gap-2">
       <span v-for="(tech, index) in project.technologies" :key="index"
        class="inline-block px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200">
        {{ tech }}
       </span>
      </div>
     </div>

     <!-- Action Buttons -->
     <div class="flex gap-3 mt-8">
      <a v-if="project.url" :href="project.url" target="_blank"
       class="flex-1 inline-flex justify-center items-center gap-x-2 text-center bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 py-3 px-6 rounded-lg font-medium transition-all duration-200">
       Voir le projet
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
       </svg>
      </a>
      <button @click="closeModal"
       class="flex-1 inline-flex justify-center items-center text-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white py-3 px-6 rounded-lg font-medium transition-all duration-200">
       Fermer
      </button>
     </div>
    </div>
   </div>
  </div>
 </transition>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import type { Project } from '../types/project'

export default defineComponent({
 name: 'ProjectModal',

 props: {
  project: {
   type: Object as () => Project,
   required: true,
  },
  isOpen: {
   type: Boolean,
   default: false,
  },
 },

 emits: ['close'],

 setup(props, { emit }) {
  const useVideo = ref(true)
  const selectedImageIndex = ref(0)

  const getImageArray = computed(() => {
   if (Array.isArray(props.project.imageSrc)) {
    return props.project.imageSrc
   }
   return [props.project.imageSrc]
  })

  const hasMultipleImages = computed(() => {
   return Array.isArray(props.project.imageSrc) && props.project.imageSrc.length > 1
  })

  const currentImage = computed(() => {
   if (Array.isArray(props.project.imageSrc)) {
    return props.project.imageSrc[selectedImageIndex.value]
   }
   return props.project.imageSrc
  })

  const closeModal = () => {
   emit('close')
   useVideo.value = true
   selectedImageIndex.value = 0
  }

  return {
   useVideo,
   selectedImageIndex,
   getImageArray,
   hasMultipleImages,
   currentImage,
   closeModal,
  }
 },
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
 transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
 opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
 transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
 transform: scale(0.95);
}
</style>
