<template>
  <transition name="fade">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        @click="onClose"
      ></div>

      <div
        class="relative z-10 max-w-lg w-full max-h-[80vh] bg-white dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform scale-100"
      >   
        <!-- Header -->
        <div
          class="sticky top-0 z-20 !h-16 flex justify-between items-center p-5 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800"
        >
          <div>
            <div class="flex items-center gap-5 mb-0 pt-2">
              <h3
                class="text-xl font-bold text-neutral-900 dark:text-white"
                :title="project.title"
              >
                {{ truncateText(project.title, 20) }}
              </h3>
              <!-- year + category -->
              <div
                class="pt-1 text-xs text-neutral-600 dark:text-neutral-400 flex flex-wrap gap-x-1 gap-y-1"
              >
                <span v-if="project.year" class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11 14h1v4" />
                    <path d="M16 2v4" />
                    <path d="M3 10h18" />
                    <path d="M8 2v4" />
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                  </svg>
                  {{ project.year }}
                </span>

                <span
                  v-if="project.category"
                  :class="[
                    'flex items-center gap-1 capitalize px-2 py-0.5 rounded-full text-xs font-medium transition-colors duration-200',
                    getColorClasses(project.category),
                  ]" :title="project.category"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                    />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  {{ truncateText(project.category, 10) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Close button -->
          <button
            @click="onClose"
            aria-label="Fermer"
            class="p-2 rounded-full transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-5 pt-3 overflow-y-auto custom-scrollbar flex-grow">
          <div>
            <!-- video -->
            <template v-if="project.videoSrc">
              <video
                :src="project.videoSrc"
                controls
                playsinline
                autoplay
                muted
                class="w-full h-52 md:h-64 object-cover rounded-lg bg-black shadow-md"
              >
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </template>

            <!-- images -->
            <template v-else>
              <img
                :src="currentImage"
                :alt="project.title"
                class="w-full h-64 md:h-80 object-cover rounded-lg bg-neutral-200 dark:bg-neutral-800 shadow-md"
              />

              <div
                v-if="images.length > 1"
                class="mt-4 flex gap-3 overflow-x-auto pb-1"
              >
                <button
                  v-for="(img, idx) in images"
                  :key="idx"
                  @click="currentIndex = idx"
                  :class="[
                    'flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200',
                    currentIndex === idx
                      ? 'ring-2 ring-primary-500 border-primary-500'
                      : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700',
                  ]"
                >
                  <img
                    :src="img"
                    :alt="project.title + ' - ' + (idx + 1)"
                    class="w-24 h-16 object-cover"
                  />
                </button>
              </div>
            </template>
          </div>

          <!-- Description -->
          <div class="mt-4 flex flex-col gap-4">
            <div>
              <!-- <p class="text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                {{ project.description }}
              </p> -->
              <p
                class="text-md text-neutral-600 dark:text-neutral-400 mt-0 italic"
              >
                {{ truncateText(project.details, 185) }}
              </p>
            </div>

            <!-- TECHNOLOGIES - VERSION FINALE !important -->
            <div v-if="project.technologies?.length">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(t, i) in project.technologies"
                  :key="i"
                  :class="[
                    'text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-transparent transition-colors duration-200',
                    getColorClasses(t),
                  ]"
                  :style="getBgStyle(t)"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div
          class="sticky bottom-0 !h-16 z-20 flex items-center justify-between p-5 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div
            class="w-full flex flex-col items-center justify-center md:flex-row gap-3"
          >
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="flex-1 gap-2 inline-flex items-center justify-center py-2 px-4 bg-primary dark:bg-primary/50 border border-primary/80 dark:border-primary/80 hover:bg-primary/90 dark:hover:bg-primary/90 !hover:border-primary text-white text-sm font-semibold rounded-lg dark:shadow-lg transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-external-link-icon lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                />
              </svg>
              Voir la preview
            </a>

            <a
              v-if="project.gitHubUrl"
              :href="project.gitHubUrl"
              target="_blank"
              rel="noopener"
              class="flex-1 gap-2 inline-flex items-center justify-center py-2 px-4 bg-slate-800/80 dark:bg-neutral-800/70 border border-neutral-200/30 dark:border-neutral-800 hover:bg-slate-700/90 dark:hover:bg-slate-100/20 !hover:border-primary text-white text-sm font-medium rounded-lg dark:shadow-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github-icon lucide-github"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Voir le projet
            </a>

            <button
              v-else
              @click="onClose"
              :class="[
                'flex-1 py-2 px-4 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-700 text-sm  dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200',
                { 'w-full': !project.url },
              ]"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import type { Project } from '../types/project'
import { truncate } from 'fs'

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
    const currentIndex = ref(0)

    const images = computed(() => {
      if (!props.project) return []
      const src = props.project.imageSrc
      return Array.isArray(src) ? src : src ? [src] : []
    })

    const currentImage = computed(() => images.value[currentIndex.value] || '')

    const categoryColorClasses = computed(() => {
      if (!props.project?.category) return ''
      return getColorClasses(props.project.category)
    })

    watch(
      () => props.project,
      () => (currentIndex.value = 0),
    )

    const onClose = () => emit('close')

    return {
      currentIndex,
      images,
      currentImage,
      onClose,
      getColorClasses,
      getBgStyle,
      categoryColorClasses,
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
