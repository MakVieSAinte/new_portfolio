<template>
  <div>
    <!-- Profile -->
    <div class="flex items-center gap-x-3">
      <div class="grow ml-1">
        <h1
          class="text-5xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk"
        >
          <!-- Designing Interfaces, <br /> -->
          {{ texts?.pageProjects?.title }}
        </h1>
      </div>
    </div>
    <!-- End Profile -->

    <!-- About -->
    <div class="mt-8 mb-12">
      <p
        class="inline-block text-lg text-gray-800 dark:text-neutral-400 font-light"
      >
        {{ texts?.pageProjects?.description }}

        <a
          href="https://github.com/MakVieSAinte"
          class="inline-block group bg-slate-100/50 dark:bg-neutral-800 px-3 pt-[4px] pb-[6px] rounded-[3px] hover:bg-slate-100/50 dark:hover:bg-neutral-700/50 border-neutral-300 dark:border-neutral-700 transition-all duration-150"
        >
          <span
            class="flex items-center justify-center gap-[6px] font-medium !text-[16px] text-gray-800 dark:text-neutral-200 dark:group-hover:dark:text-neutral-100 group-hover:dark:text-gray-900 leading-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              class="bi bi-github max-md:text-md md:text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
            <span
              class="group-hover:underline underline-offset-2 transition-all duration-200"
              >GitHub</span
            >
          </span>
        </a>

        {{ texts?.pageProjects?.description2 }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '../../composables'

export default defineComponent({
  name: 'HerosComponent',

  data() {
    return {}
  },

  methods: {},

  mounted() {
    // Vérifie si le script n'est pas déjà chargé
    if (!document.getElementById('bmc-script')) {
      const script = document.createElement('script')
      script.id = 'bmc-script'
      script.type = 'text/javascript'
      script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js'
      script.setAttribute('data-name', 'bmc-button')
      script.setAttribute('data-slug', 'MakVieSAinte')
      script.setAttribute('data-color', '#FFDD00')
      script.setAttribute('data-emoji', '')
      script.setAttribute('data-font', 'Cookie')
      script.setAttribute('data-text', 'Offrez-moi un café')
      script.setAttribute('data-outline-color', '#000000')
      script.setAttribute('data-font-color', '#000000')
      script.setAttribute('data-coffee-color', '#ffffff')
      document.getElementById('bmc-button-container')?.appendChild(script)
    }
  },

  setup() {
    const { texts, locale } = useI18n('home')

    return {
      texts,
      locale,
    }
  },
})
</script>

<style scoped>
.pulse {
  animation: pulse-animation 0.95s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(77, 255, 181);
  }

  100% {
    box-shadow: 0 0 0 4px rgb(77, 255, 181, 0);
  }
}
</style>
