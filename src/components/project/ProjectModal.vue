<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="isOpen && project" class="fixed inset-0 z-50 flex items-center justify-center p-4 duration-150">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="onClose"></div>

        <div
          class="relative z-10 max-w-lg w-full max-h-[80vh] bg-white dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform scale-100">
          <!-- Header -->
          <div
            class="sticky top-0 z-20 flex flex-col max-md:!h-auto md:!h-16 justify-between items-start md:items-center p-3 md:p-5 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 gap-3 md:gap-0">
            <div class="w-full">
              <div class="flex flex-col max-md:gap-2 md:flex-row items-start md:items-center gap-5 mb-0 pt-0 md:pt-2">
                <h3 class="text-lg md:text-xl font-bold text-neutral-900 dark:text-white" :title="project.title">
                  {{ truncateText(project.title, 25) }}
                </h3>
                <!-- year + category -->
                <div class="pt-0 md:pt-1 text-xs text-neutral-600 dark:text-neutral-400 flex flex-wrap gap-x-1 gap-y-1">
                  <span v-if="project.year" class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M11 14h1v4" />
                      <path d="M16 2v4" />
                      <path d="M3 10h18" />
                      <path d="M8 2v4" />
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                    </svg>
                    {{ project.year }}
                  </span>

                  <span v-if="project.category" :class="[
                    'flex items-center gap-1 capitalize px-2 py-0.5 rounded-full text-xs font-medium transition-colors duration-200',
                    getColorClasses(project.category),
                  ]" :title="project.category">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    {{ truncateText(project.category, 18) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Close button -->
            <button @click="onClose" aria-label="Fermer"
              class="absolute top-3 right-3 md:top-5 md:right-5 z-30 p-2 rounded-full transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="p-3 md:p-5 pt-2 md:pt-3 overflow-y-auto custom-scrollbar flex-grow">
            <div>
              <!-- CAROUSEL MEDIA (Video + Images) -->
              <div @mouseenter="showCarouselControls = true" @mouseleave="showCarouselControls = false"
                class="relative w-full">
                <!-- Media Container with Fixed Ratio -->
                <div class="relative w-full flex items-center justify-center overflow-hidden rounded-lg bg-transparent" style="aspect-ratio: 16 / 9">
                  <!-- Video (if exists and is first) -->
                  <video v-if="currentMediaIsVideo && mediaUrl" :src="mediaUrl" controls playsinline autoplay muted
                    class="w-full h-full object-cover">
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>

                  <!-- Image (if current media is image) -->
                  <img v-else v-if="mediaUrl" :src="mediaUrl" :alt="project.title" class="h-full object-cover" />

                  <!-- Prev Button -->
                  <button v-if="allMediaItems.length > 1" @click="goToPrevious" :class="[
                    'absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 rounded-full transition-all duration-200 bg-black/60 hover:bg-black/80 text-white',
                    showCarouselControls
                      ? 'opacity-100'
                      : 'max-md:opacity-70 md:opacity-0 md:hover:opacity-100',
                  ]" aria-label="Précédent">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <!-- Next Button -->
                  <button v-if="allMediaItems.length > 1" @click="goToNext" :class="[
                    'absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 rounded-full transition-all duration-200 bg-black/60 hover:bg-black/80 text-white',
                    showCarouselControls
                      ? 'opacity-100'
                      : 'max-md:opacity-70 md:opacity-0 md:hover:opacity-100',
                  ]" aria-label="Suivant">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <!-- Media Indicators -->
                  <div v-if="allMediaItems.length > 1"
                    class="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
                    <button v-for="(_, idx) in allMediaItems" :key="idx" @click="currentMediaIndex = idx" :class="[
                      'w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-200',
                      currentMediaIndex === idx
                        ? 'bg-white w-4 md:w-6'
                        : 'bg-white/60 hover:bg-white/80',
                    ]" :aria-label="`Média ${idx + 1}`" />
                  </div>
                </div>

                <!-- Media Thumbnails -->
                <div v-if="allMediaItems.length > 1" class="mt-1 md:mt-3 flex gap-2 md:gap-2 overflow-x-auto pb-1">
                  <button v-for="(item, idx) in allMediaItems" :key="idx" @click="currentMediaIndex = idx" :class="[
                    'flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200',
                    currentMediaIndex === idx
                      ? 'ring-2 ring-primary-500 border-primary-500'
                      : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700',
                  ]">
                    <!-- Thumbnail: Video or Image -->
                    <template v-if="item.type === 'video'">
                      <div class="w-16 h-10 md:w-20 md:h-12 bg-black flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 text-white"
                          fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </template>
                    <template v-else>
                      <img :src="resolveAssetUrl('images/projets', item.src)"
                        v-if="resolveAssetUrl('images/projets', item.src)" :alt="project.title + ' - ' + (idx + 1)"
                        class="w-16 h-10 md:w-20 md:h-12 object-cover mx-auto" />
                    </template>
                  </button>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="mt-3 md:mt-4 flex flex-col gap-3 md:gap-4">
              <div>
                <!-- <p class="text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                {{ project.description }}
              </p> -->
                <p class="text-sm md:text-md text-neutral-600 dark:text-neutral-400 mt-0 italic">
                  {{ truncateText(project.details || '', 185) }}
                </p>
              </div>

              <!-- TECHNOLOGIES - VERSION FINALE !important -->
              <div v-if="project.technologies?.length">
                <div class="flex flex-wrap gap-1.5 md:gap-2">
                  <span v-for="(t, i) in project.technologies" :key="i" :class="[
                    'text-xs md:text-xs font-medium px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-sm border border-transparent transition-colors duration-200',
                    getColorClasses(t),
                  ]" :style="getBgStyle(t)">
                    {{ t }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div
            class="sticky bottom-0 !h-16 z-20 flex items-center justify-between p-5 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
            <div class="w-full flex items-center justify-center md:flex-row gap-3">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener"
                class="flex-1 gap-2 inline-flex items-center justify-center py-2 px-3 md:px-4 bg-primary dark:bg-primary/50 border border-primary/80 dark:border-primary/80 hover:bg-primary/90 dark:hover:bg-primary/90 !hover:border-primary text-white text-xs md:text-sm font-semibold rounded-lg dark:shadow-lg transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-external-link-icon lucide-external-link">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
                <span>Preview</span>
              </a>

              <a v-if="project.gitHubUrl" :href="project.gitHubUrl" target="_blank" rel="noopener"
                class="flex-1 gap-2 inline-flex items-center justify-center py-2 px-3 md:px-4 bg-slate-800/80 dark:bg-neutral-800/70 border border-neutral-200/30 dark:border-neutral-800 hover:bg-slate-700/90 dark:hover:bg-slate-100/20 !hover:border-primary text-white text-xs md:text-sm font-medium rounded-lg dark:shadow-lg hover:bg-primary-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-github-icon lucide-github">
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>Projet GitHub</span>
              </a>

              <button v-else @click="onClose" :class="[
                'flex-1 py-2 px-3 md:px-4 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-700 text-xs md:text-sm dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200',
                { 'w-full': !project.url },
              ]">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import type { Project } from '@/types/project'

// --- PALETTES COHERENTES (texte + bg harmonisés) ---
const colorPalettes = [
  { bg: 'rgba(254, 202, 202, 0.1)', text: 'text-red-700 dark:text-red-300' },
  {
    bg: 'rgba(187, 247, 208, 0.1)',
    text: 'text-green-700 dark:text-green-300',
  },
  { bg: 'rgba(191, 219, 254, 0.1)', text: 'text-blue-700 dark:text-blue-300' },
  {
    bg: 'rgba(253, 230, 138, 0.1)',
    text: 'text-amber-700 dark:text-amber-300',
  },
  {
    bg: 'rgba(233, 213, 255, 0.1)',
    text: 'text-purple-700 dark:text-purple-300',
  },
  {
    bg: 'rgba(199, 210, 254, 0.1)',
    text: 'text-indigo-700 dark:text-indigo-300',
  },
  { bg: 'rgba(165, 243, 252, 0.1)', text: 'text-cyan-700 dark:text-cyan-300' },
]

const colorCache = new Map<string, string>()

// TEXT only (tailwind)
const getColorClasses = (key: string): string => {
  const normalizedKey = key.toLowerCase().trim()

  if (colorCache.has(normalizedKey)) {
    return colorCache.get(normalizedKey)!
  }

  let hash = 0
  for (let i = 0; i < normalizedKey.length; i++) {
    hash = normalizedKey.charCodeAt(i) + ((hash << 5) - hash)
  }

  const index = Math.abs(hash) % colorPalettes.length
  const classes = `${colorPalettes[index].text}`

  colorCache.set(normalizedKey, classes)
  return classes
}

// BG !important
const getBgStyle = (key: string) => {
  const normalizedKey = key.toLowerCase().trim()

  let hash = 0
  for (let i = 0; i < normalizedKey.length; i++) {
    hash = normalizedKey.charCodeAt(i) + ((hash << 5) - hash)
  }

  const index = Math.abs(hash) % colorPalettes.length
  return `background: ${colorPalettes[index].bg} !important;`
}

export default defineComponent({
  name: 'ProjectModal',

  props: {
    project: { type: Object as () => Project | null, default: null },
    isOpen: { type: Boolean, default: false },
  },

  emits: ['close'],

  methods: {
    truncateText(text: string, maxLength: number): string {
      if (text.length <= maxLength) return text
      return text.slice(0, maxLength) + '...'
    },
  },

  setup(props, { emit }) {
    const currentMediaIndex = ref(0)
    const showCarouselControls = ref(false)

    // Build all media items array (video first, then images)
    const allMediaItems = computed(() => {
      if (!props.project) return []

      const items: Array<{ type: 'video' | 'image'; src: string }> = []

      // Add video first if it exists
      if (props.project.videoSrc) {
        items.push({ type: 'video', src: props.project.videoSrc })
      }

      // Add images
      const imageSrc = props.project.imageSrc
      const imageArray = Array.isArray(imageSrc)
        ? imageSrc
        : imageSrc
          ? [imageSrc]
          : []
      imageArray.forEach(src => {
        items.push({ type: 'image', src })
      })

      return items
    })

    const currentMedia = computed(
      () => allMediaItems.value[currentMediaIndex.value]?.src || '',
    )

    const currentMediaIsVideo = computed(
      () => allMediaItems.value[currentMediaIndex.value]?.type === 'video',
    )

    // Resolve asset URL:
    // - If `filename` is already an absolute URL (http/https or protocol-relative), return it as-is.
    // - If Vite env `VITE_CLOUDINARY_CLOUD_NAME` is set and the media is a video (and the provided
    //   `filename` looks like a Cloudinary public id/path), build a Cloudinary URL.
    // - Otherwise, fallback to local public images path or bundled assets.
    const resolveAssetUrl = (
      type: 'videos' | 'images/projets',
      filename: string,
    ) => {
      if (!filename) return ''

      // If already an absolute URL (http/https or protocol-relative), use it directly
      if (/^(https?:)?\/\//i.test(filename)) return filename

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

      // If a Cloudinary cloud name is configured and media is a video, build the Cloudinary URL.
      // The `filename` can be a public id (with or without folders and extension). Examples:
      //  - public_id.mp4
      //  - folder/subfolder/public_id
      if (cloudName && type === 'videos') {
        // Ensure we don't accidentally treat local-relative paths as Cloudinary IDs when they start with './' or '../'
        if (!filename.startsWith('./') && !filename.startsWith('../') && !filename.startsWith('/')) {
          const folder = import.meta.env.VITE_CLOUDINARY_VIDEO_FOLDER
          const resourceType = import.meta.env.VITE_CLOUDINARY_RESOURCE_TYPE || 'video'
          const path = folder ? `${folder}/${filename}` : filename
          return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${path}`
        }
      }

      // Images used in the project modal are expected to live under public/images/projets
      if (type === 'images/projets') {
        return `/images/projets/${filename}`
      }

      // Fallback: try resolving bundled asset (useful for local development)
      try {
        return new URL(`../../assets/${type}/${filename}`, import.meta.url).href
      } catch (e) {
        return ''
      }
    }

    const mediaUrl = computed(() => {
      const src = currentMedia.value
      if (!src) return ''
      return currentMediaIsVideo.value
        ? resolveAssetUrl('videos', src)
        : resolveAssetUrl('images/projets', src)
    })

    const goToNext = () => {
      if (allMediaItems.value.length === 0) return
      currentMediaIndex.value =
        (currentMediaIndex.value + 1) % allMediaItems.value.length
    }

    const goToPrevious = () => {
      if (allMediaItems.value.length === 0) return
      currentMediaIndex.value =
        currentMediaIndex.value === 0
          ? allMediaItems.value.length - 1
          : currentMediaIndex.value - 1
    }

    watch(
      () => props.project,
      () => (currentMediaIndex.value = 0),
    )

    const onClose = () => emit('close')

    return {
      currentMediaIndex,
      allMediaItems,
      currentMedia,
      currentMediaIsVideo,
      mediaUrl,
      resolveAssetUrl,
      goToNext,
      goToPrevious,
      showCarouselControls,
      onClose,
      getColorClasses,
      getBgStyle,
    }
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.dark .custom-scrollbar::-webkit-scrollbar-track {
  background: #2a2a2a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #555;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>
