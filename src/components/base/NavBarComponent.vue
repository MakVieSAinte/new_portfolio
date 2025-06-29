<template>
  <div>

    <!-- NavBar -->
    <div class="fixed md:top-10 max-md:bottom-5 inset-x-0 text-center z-50">
      <div
        class="inline-block backdrop-blur-sm md:bg-white/50 max-md:bg-white/60 rounded-full py-3 px-5 md:dark:bg-neutral-800/50 max-md:dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 z-50">
        <div class="flex items-center gap-x-5">
          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              {{ texts.home }}
            </button>
          </div>
          <!-- Button -->


          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              {{ texts.project }}
            </button>
          </div>
          <!-- Button -->

          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              {{ texts.lab }}
            </button>
          </div>
          <!-- Button -->


          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              {{ texts.about }}
            </button>
          </div>
          <!-- Button -->


          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              {{ texts.blog }}
            </button>
          </div>
          <!-- Button -->


            <li class="inline-block">
              <!-- Bouton pour activer le mode sombre -->
              <button v-if="theme === 'light'" @click="setTheme('dark')" type="button"
                class="relative flex justify-center items-center max-md:text-md md:text-sm text-neutral-500 dark:text-neutral-400 dark:hover:text-white hover:text-neutral-900 transition-colors duration-150">
                <span class="sr-only">Activer le mode sombre</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>

              </button>

              <!-- Bouton pour désactiver le mode sombre -->
              <button v-else @click="setTheme('light')" type="button"
                class="relative flex justify-center items-center max-md:text-md md:text-sm text-neutral-500 dark:text-neutral-400 dark:hover:text-white hover:text-neutral-900 transition-colors duration-150">
                <span class="sr-only">Désactiver le mode sombre</span>


                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              </button>
            </li>
        </div>
      </div>
    </div>
    <!-- End NavBar -->

    <!-- Lang -->
             <div class="fixed max-md:relative md:top-12 max-md:top-3 max-md:right-3 right-10 text-center z-50">
      <div
        class="inline-block backdrop-blur-sm md:bg-white/50 max-md:bg-white/60 rounded-md py-2 max-md:py-0 px-3 max-md:px-1 md:dark:bg-neutral-800/50 max-md:dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 z-50">
       <div class="flex items-center gap-x-3 max-md:gap-x-1">
    <!-- Bouton EN -->
    <div class="hs-tooltip inline-block">
      <button
        @click="changeLanguage('en')"
        class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-sm md:text-sm"
        :class="locale === 'en' ? 'text-gray-900 dark:text-white' : 'text-neutral-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white'"
      >
        en
      </button>
    </div>

    <!-- Bouton FR -->
    <div class="hs-tooltip inline-block">
      <button
        @click="changeLanguage('fr')"
        class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-sm md:text-sm"
        :class="locale === 'fr' ? 'text-gray-900 dark:text-white' : 'text-neutral-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white'"
      >
        fr
      </button>
    </div>
  </div>

      </div>
    </div>
    <!-- EndLang -->
     
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '@/composables'

export default defineComponent({

  name: 'NavBarComponent',

  data() {
    return {
      theme: 'dark',
    }
  },

  methods: {
    setTheme(value) {
      this.theme = value
      localStorage.setItem('theme', value)
      document.documentElement.classList.toggle('dark', value === 'dark')
    },
  },

  mounted() {
    const savedTheme = localStorage.getItem('theme') || 'light'
    this.setTheme(savedTheme)
  },

  setup() {
    const { locale, setLocale, texts } = useI18n('navbar')

    function changeLanguage(lang: string) {
      setLocale(lang, 'navbar')
    }

    return {
      locale,
      setLocale,
      texts,
      changeLanguage
    }
  }
});
</script>

<style scoped></style>
