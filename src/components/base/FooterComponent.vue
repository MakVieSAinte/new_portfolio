<template>
  <div>
    <!-- ========== FOOTER ========== -->
    <footer class="w-full max-w-full mx-auto px-0 pt-4">
      <div class="pt-6 md:pb-10 max-md:pb-20">
        <div
          class="flex flex-wrap justify-between items-center gap-2 md:pb-1 max-md:pb-5"
        >
          <!-- Copyright -->
          <div
            class="relative inline-flex mt-2 text-sm text-gray-800 dark:text-neutral-300"
          >
            © {{ new Date().getFullYear() }}, MakVieSAinte -
            {{ texts?.footer?.reserved }}
          </div>
          <!-- End Copyright -->

          <!-- Language Switch -->
          <div class="flex items-center gap-2">
            <button
              @click="changeLanguage('en')"
              :class="[
                'px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 backdrop-blur-sm bg-white/90 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-800/20',
                locale === 'en'
                  ? 'text-gray-900 dark:text-white'
                  : 'text-neutral-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white',
              ]"
            >
              en
            </button>
            <button
              @click="changeLanguage('fr')"
              :class="[
                'px-2.5 py-1 text-xs font-semibold rounded transition-all duration-200 backdrop-blur-sm bg-white/90 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-800/20',
                locale === 'fr'
                  ? 'text-gray-900 dark:text-white bg-slate-200 dark:bg-neutral-600'
                  : 'text-neutral-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white',
              ]"
            >
              fr
            </button>
          </div>
          <!-- End Language Switch -->

          <!-- List -->
          <ul class="flex flex-wrap items-center !list-none">
            <li
              class="list-none inline-block relative pe-5 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 dark:text-neutral-500 dark:before:bg-neutral-600"
            >
              <a href="mailto:mridel@proton.me">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="bi bi-github max-md:text-md md:text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li
              class="list-none inline-block relative pe-5 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 dark:text-neutral-500 dark:before:bg-neutral-600"
            >
              <a :href="mylinks.github" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  class="bi bi-github max-md:text-md md:text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  />
                </svg>
              </a>
            </li>
            <li class="list-none inline-block pe-5 text-xs">
              <a :href="mylinks.linkedin" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-linkedin max-md:text-md md:text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  />
                </svg>
              </a>
            </li>

            <a :href="mylinks.buymeCoffee" target="_blank"
              ><img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Achetez-moi un café"
                style="width: 100px !important"
            /></a>
          </ul>
          <!-- End List -->
        </div>
      </div>
    </footer>
    <!-- ========== END FOOTER ========== -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '../../composables'
import link from '@/data/link.json'

export default defineComponent({
  name: 'FooterComponent',

  data() {
    return {
      mylinks: link || [],
    }
  },

  methods: {
    changeLanguage(lang: string) {
      localStorage.setItem('lang', lang)
      window.location.reload()
    },
  },

  mounted() {},

  setup() {
    const { texts, locale } = useI18n('home')

    return {
      texts,
      locale,
    }
  },
})
</script>

<style scoped></style>
