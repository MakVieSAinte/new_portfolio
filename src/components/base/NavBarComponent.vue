<template>
  <teleport to="body">
    <div>
      <!-- NavBar -->
      <div class="fixed md:top-10 max-md:bottom-5 inset-x-0 text-center z-50">
        <div
          class="inline-block backdrop-blur-sm md:bg-white/90 max-md:bg-white/95 rounded-full py-3 px-5 md:dark:bg-neutral-800/80 max-md:dark:bg-neutral-800/90 border border-neutral-200/50 dark:border-neutral-800/10 z-50 shadow-lg shadow-neutral-950/5"
        >
          <div class="flex items-center gap-x-3">
            <!-- Button -->
            <div class="hs-tooltip inline-block">
              <routerLink
                to="/"
                type="button"
                class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm transition-colors duration-150"
                :class="
                  activePage === 'home'
                    ? 'dark:text-white text-gray-800'
                    : 'text-neutral-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white'
                "
              >
                {{ texts.home }}
              </routerLink>
            </div>
            <!-- Button -->

            <!-- Button -->
            <div class="hs-tooltip inline-block">
              <routerLink
                to="/projects"
                type="button"
                class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm transition-colors duration-150"
                :class="
                  activePage === 'project'
                    ? 'dark:text-white text-gray-800'
                    : 'text-neutral-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white'
                "
              >
                {{ texts.project }}
              </routerLink>
            </div>
            <!-- Button -->

            <!-- Button -->
            <div class="hs-tooltip inline-block">
              <routerLink
                to="/labs"
                type="button"
                class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm transition-colors duration-150"
                :class="
                  activePage === 'labs'
                    ? 'dark:text-white text-gray-800'
                    : 'text-neutral-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white'
                "
              >
                {{ texts.lab }}
              </routerLink>
            </div>
            <!-- Button -->

            <!-- Button -->
            <div class="hs-tooltip inline-block">
              <routerLink
                to="/about"
                type="button"
                class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm transition-colors duration-150"
                :class="
                  activePage === 'about'
                    ? 'dark:text-white text-gray-800'
                    : 'text-neutral-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white'
                "
              >
                {{ texts.about }}
              </routerLink>
            </div>
            <!-- Button -->

            <!-- Button -->
            <div class="hs-tooltip inline-block">
              <routerLink
                to="/blog"
                type="button"
                class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm transition-colors duration-150"
                :class="
                  activePage === 'blog'
                    ? 'dark:text-white text-gray-800'
                    : 'text-neutral-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white'
                "
              >
                {{ texts.blog }}
              </routerLink>
            </div>
            <!-- Button -->

            <li class="inline-block ml-2">
              <!-- Bouton pour activer le mode sombre -->
              <button
                v-if="theme === 'dark'"
                @click="setTheme('light')"
                type="button"
                class="relative flex justify-center items-center max-md:text-md md:text-sm text-neutral-500 dark:text-neutral-400 dark:hover:text-white hover:text-neutral-900 transition-colors duration-150"
              >
                <span class="sr-only">Activer le mode sombre</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon-icon lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </button>

              <!-- Bouton pour désactiver le mode sombre -->
              <button
                v-else
                @click="setTheme('dark')"
                type="button"
                class="relative flex justify-center items-center max-md:text-md md:text-sm text-neutral-500 dark:text-neutral-400 dark:hover:text-white hover:text-neutral-900 transition-colors duration-150"
              >
                <span class="sr-only">Désactiver le mode sombre</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sun-icon lucide-sun"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </button>
            </li>
          </div>
        </div>
      </div>
      <!-- End NavBar -->

      <!-- Lang -->
      <div
        class="fixed max-md:hidden max-md:relative md:top-12 max-md:top-4 max-md:right-4 left-36 text-left z-50"
      >
        <div
          class="inline-block backdrop-blur-sm bg-white/90 rounded-md py-2 px-3 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-800/20 z-50"
        >
          <div class="flex items-center gap-x-3 max-md:gap-x-1 justify-start">
            <!-- Bouton EN -->
            <div class="hs-tooltip inline-block">
              <button
                @click="changeLanguage('en')"
                class="hs-tooltip-toggle flex items-center gap-x-2 font-medium text-sm"
                :class="
                  locale === 'en'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-neutral-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white'
                "
              >
                en
              </button>
            </div>

            <!-- Bouton FR -->
            <div class="hs-tooltip inline-block">
              <button
                @click="changeLanguage('fr')"
                class="hs-tooltip-toggle flex items-center gap-x-2 font-medium text-sm"
                :class="
                  locale === 'fr'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-neutral-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white'
                "
              >
                fr
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- EndLang -->
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useI18n } from '../../composables'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'NavBarComponent',

  setup() {
    const theme = ref('dark')
    const activePage = ref('home')
    const route = useRoute()
    // Chargement des traductions pour la navbar et home
    const { locale, setLocale, texts } = useI18n('navbar,home')

    // Active page par rapport à la route
    const updateActivePage = () => {
      // If we're on an article detail page, highlight Blog
      if (route.name === 'ArticleDetail' || route.path.startsWith('/article')) {
        activePage.value = 'blog'
        return
      }

      const pathMap: Record<string, string> = {
        '/': 'home',
        '/projects': 'project',
        '/labs': 'labs',
        '/about': 'about',
        '/blog': 'blog',
      }
      activePage.value = pathMap[route.path] || ''
    }

    // 🌐 Changement de langue
    function changeLanguage(lang: string) {
      // Utiliser la même liste de pages qu'au chargement initial
      setLocale(lang, 'navbar,home')

      // Debugging
      // console.log(`🔄 Langue changée pour: ${lang}`)
      // console.log('📚 Traductions:', texts.value)
    }

    // 🌓 Changement de thème
    function setTheme(value: string, save = true) {
      theme.value = value
      if (save) localStorage.setItem('theme', value)
      document.documentElement.classList.toggle('dark', value === 'dark')
    }

    // Initialisation
    updateActivePage()

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme, false)
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      setTheme(systemPrefersDark ? 'dark' : 'light', false)
    }

    // 🧭 Surveille les changements de route
    watch(() => route.path, updateActivePage)

    return {
      theme,
      activePage,
      locale,
      setLocale,
      texts,
      changeLanguage,
      setTheme,
    }
  },
})
</script>

<style scoped></style>
