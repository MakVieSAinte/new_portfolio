<template>
  <button
    @click="openModal"
    class="group flex flex-col bg-slate-100/50 border border-neutral-200 rounded-lg dark:bg-neutral-800/30 dark:border-neutral-800 overflow-hidden h-[266px] p-[7px] relative hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 w-full text-left"
  >
    <div
      class="w-full h-max flex items-center justify-start gap-1 mb-[2px] pl-[3px]"
    >
      <span
        class="block w-[8px] h-[8px] !bg-neutral-200 border-neutral-100 dark:!bg-neutral-700 rounded-full group-hover:!bg-red-600 transition-all duration-300 z-50"
      ></span>
      <span
        class="w-[8px] h-[8px] !bg-neutral-200 border-neutral-100 dark:!bg-neutral-700 rounded-full group-hover:!bg-yellow-600 transition-all duration-300 z-50"
      ></span>
      <span
        class="w-[8px] h-[8px] !bg-neutral-200 border-neutral-100 dark:!bg-neutral-700 rounded-full group-hover:!bg-green-600 transition-all duration-300 z-50"
      ></span>
    </div>

    <div
      class="group w-full h-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden rounded-md mt-2"
    >
      <img
        :src="imageUrl"
        :alt="title"
        class="group-hover:scale-150 object-cover w-full h-full transition-all duration-500 transform-origin-center"
      />
    </div>

    <div
      class="absolute bottom-0 w-full h-max mt-2 bg-transparent px-auto flex items-center justify-center"
    >
      <div
        class="flex items-center justify-between backdrop-blur-sm bg-gray-400/20 dark:bg-neutral-800/60 w-[70%] h-max py-2 px-3 mt-2 mx-auto rounded-t-md text-left border-t border-x border-neutral-200/30 dark:border-neutral-600/40"
      >
        <div>
          <p class="text-neutral-100 dark:text-white text-sm font-medium">
            {{ title }}
          </p>

          <div
            class="hidden group-hover:flex mt-1 gap-1 flex-wrap transsition-all duration-500"
          >
            <span
              v-for="(tech, index) in technologies"
              :key="index"
              class="py-0.0 text-[10px] leading-none bg-gray-800/50 dark:bg-neutral-700/50 text-white rounded-sm transition-all duration-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div
          class="p-1 border border-transparent group-hover:border-neutral-100/30 dark:group-hover:border-white rounded-full transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-3 text-neutral-100 dark:text-white group-hover:-rotate-45 transition-all duration-[1s]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ProjectCard',

  props: {
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: [String, Array] as any,
      required: true,
    },
    videoSrc: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    technologies: {
      type: Array as () => string[],
      default: () => [],
    },
  },

  emits: ['openModal'],

  setup(props, { emit }) {
    // Get first image from array or string
    const firstImage = computed(() => {
      const img = Array.isArray(props.imageSrc)
        ? props.imageSrc[0]
        : props.imageSrc
      return img || ''
    })

    // Use public folder images (public/images/projets)
    const imageUrl = computed(() => {
      if (!firstImage.value) return ''
      return `/images/projets/${firstImage.value}`
    })

    const openModal = () => {
      emit('openModal')
    }

    return {
      openModal,
      imageUrl,
    }
  },
})
</script>

<style scoped></style>
