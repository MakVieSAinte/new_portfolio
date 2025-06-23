<template>
  <div>
    <!-- ========== FOOTER ========== -->
    <footer class="w-full max-w-full mx-auto px-0 pt-4">
      <div class="pt-6 md:pb-10 max-md:pb-20">
        <div class="flex flex-wrap justify-between items-center gap-2 md:pb-1 max-md:pb-5">
          <div>


            <!-- Language Dropdown -->
            <div class="relative inline-flex" ref="dropdownRef">
              <!-- Button -->
              <button @click="toggleDropdown"
                class="py-1 px-2 inline-flex items-center gap-x-2 text-[12px] rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                <span class="shrink-0 size-3 rounded-full" v-html="selected.icon"></span>
                {{ selected.label }}
                <svg :class="{ 'rotate-180': isOpen }"
                  class="transition-transform shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>

              <!-- Dropdown (opens upward) -->
              <div v-show="isOpen"
                class="absolute bottom-full mb-2 z-10 w-44 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700">
                <a v-for="lang in languages" :key="lang.label" href="#" @click.prevent="selectLanguage(lang)"
                  class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300">
                  <span class="shrink-0 size-3 rounded-full" v-html="lang.icon"></span>
                  {{ lang.label }}
                </a>
              </div>
            </div>
            <!-- End Language Dropdown -->



          </div>
          <!-- End Col -->

          <!-- List -->
          <ul class="flex flex-wrap items-center list-none">
            <li
              class="list-none inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
              <a
                href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-github max-md:text-md md:text-sm text-neutral-400 hover:text-white transition-colors duration-150" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
              </a>
            </li>
            <li class="list-none inline-block pe-4 text-xs">
              <a href="http://">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-linkedin max-md:text-md md:text-sm text-neutral-400 hover:text-white transition-colors duration-150" viewBox="0 0 16 16">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
            </li>
            <li class="inline-block">
              <!-- Bouton pour activer le mode sombre -->
              <button v-if="theme === 'light'" @click="setTheme('dark')" type="button"
                class="relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700">
                <span class="sr-only">Activer le mode sombre</span>
                <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </button>

              <!-- Bouton pour désactiver le mode sombre -->
              <button v-else @click="setTheme('light')" type="button"
                class="relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700">
                <span class="sr-only">Désactiver le mode sombre</span>
                <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </button>
            </li>
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

export default defineComponent({

  name: "FooterComponent",

  data() {
    return {
      theme: 'light',
      isOpen: false,
      selected: {
        label: 'English (US)',
        icon: `<svg width="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet">

<path d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6h16z" fill="#ed4c5c">

</path>

<path d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32v4.6z" fill="#ffffff">

</path>

<path d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32v4.6z" fill="#ed4c5c">

</path>

<path d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32v4.6" fill="#ffffff">

</path>

<path d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32V25z" fill="#ed4c5c">

</path>

<path d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32v4.6" fill="#ffffff">

</path>

<path d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3c0-.8 0-1.6-.1-2.3" fill="#ed4c5c">

</path>

<path d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.4 3.1.7 4.6" fill="#ffffff">

</path>

<path d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6" fill="#ed4c5c">

</path>

<path d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6" fill="#ffffff">

</path>

<path d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6" fill="#ed4c5c">

</path>

<path d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6" fill="#ffffff">

</path>

<path d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7" fill="#ed4c5c">

</path>

<path d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6c-1.4 1.4-2.6 3-3.6 4.6c-.9 1.5-1.8 3-2.4 4.6c-.6 1.5-1.1 3-1.5 4.6c-.4 1.5-.6 3-.7 4.6c-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6" fill="#428bc1">

</path>

<g fill="#ffffff">

<path d="M25 3l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M29 9l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M21 9l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M25 15l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M17 15l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M9 15l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M29 21l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M21 21l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M13 21l.5 1.5H15l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M25 27l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M17 27l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M9 27l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M11.8 13l1.2-.9l1.2.9l-.5-1.5l1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9l-.5 1.6">

</path>

<path d="M3.8 25l1.2-.9l1.2.9l-.5-1.5l1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6l-.4 1.6">

</path>

</g>

</svg>`
      },
      languages: [
        {
          label: 'English (US)',
          icon: `<svg width="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet">

<path d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6h16z" fill="#ed4c5c">

</path>

<path d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32v4.6z" fill="#ffffff">

</path>

<path d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32v4.6z" fill="#ed4c5c">

</path>

<path d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32v4.6" fill="#ffffff">

</path>

<path d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32V25z" fill="#ed4c5c">

</path>

<path d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32v4.6" fill="#ffffff">

</path>

<path d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3c0-.8 0-1.6-.1-2.3" fill="#ed4c5c">

</path>

<path d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.4 3.1.7 4.6" fill="#ffffff">

</path>

<path d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6" fill="#ed4c5c">

</path>

<path d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6" fill="#ffffff">

</path>

<path d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6" fill="#ed4c5c">

</path>

<path d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6" fill="#ffffff">

</path>

<path d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7" fill="#ed4c5c">

</path>

<path d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6c-1.4 1.4-2.6 3-3.6 4.6c-.9 1.5-1.8 3-2.4 4.6c-.6 1.5-1.1 3-1.5 4.6c-.4 1.5-.6 3-.7 4.6c-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6" fill="#428bc1">

</path>

<g fill="#ffffff">

<path d="M25 3l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M29 9l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M21 9l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M25 15l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M17 15l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M9 15l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M29 21l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M21 21l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M13 21l.5 1.5H15l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M25 27l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M17 27l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M9 27l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5z">

</path>

<path d="M11.8 13l1.2-.9l1.2.9l-.5-1.5l1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9l-.5 1.6">

</path>

<path d="M3.8 25l1.2-.9l1.2.9l-.5-1.5l1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6l-.4 1.6">

</path>

</g>

</svg>`
        },
        {
          label: 'Français',
          icon: `<svg width="15" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path d="M1.9 32c0 13.1 8.4 24.2 20 28.3V3.7C10.3 7.8 1.9 18.9 1.9 32z" fill="#428bc1"></path><path d="M61.9 32c0-13.1-8.3-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3" fill="#ed4c5c"></path><path d="M21.9 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.8 2.6 35.5 2 31.9 2s-6.9.6-10 1.7v56.6" fill="#ffffff"></path></svg>`
        },
      ]
    }
  },

  methods: {
    setTheme(value) {
      this.theme = value
      localStorage.setItem('theme', value)
      document.documentElement.classList.toggle('dark', value === 'dark')
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    closeDropdown(e) {
      if (this.$refs.dropdownRef && !this.$refs.dropdownRef.contains(e.target)) {
        this.isOpen = false
      }
    },
    selectLanguage(lang) {
      this.selected = lang
      this.isOpen = false
    }
  },

  mounted() {
    const savedTheme = localStorage.getItem('theme') || 'light'
    this.setTheme(savedTheme)
    document.addEventListener('click', this.closeDropdown)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown)
  }
});
</script>

<style scoped></style>
