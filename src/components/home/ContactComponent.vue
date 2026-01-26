<template>
  <div>
    <!-- Subscribe -->
    <div class="my-10 sm:my-14">
      <h1 class="mb-1 text-3xl font-medium text-primary font-familjen_grotesk">
        {{ texts?.contact?.title }}
      </h1>
      <p class="text-md font-light text-gray-800 dark:text-neutral-400">
        {{ texts?.contact?.description }}
        <a href="https://cal.com/makviesainte/appel-decouverte" target="_blank"
          class="underline text-primary hover:text-primary dark:hover:text-white">{{ texts?.contact?.description2 }}</a>
      </p>  

      <!-- Input -->
      <form action="https://formspree.io/f/mldlrryo" method="POST" class="mt-8">
        <div
          class="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-800">
          <!-- Champ nom -->
          <div class="relative w-full !outline-0">
            <label for="name" class="sr-only">Nom</label>
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <svg class="shrink-0 size-4 text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 20c0-2.21 3.58-4 6-4s6 1.79 6 4" />
              </svg>
            </div>
            <input type="text" id="name" name="name"
              class="py-2 ps-9 pe-3 block outline-0 w-full border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-neutral-900 font-normal text-gray-950 dark:text-white dark:placeholder-neutral-400"
              :placeholder="texts?.contact?.namePlaceholder" required />
          </div>

          <!-- Séparateur -->
          <div class="hidden sm:block h-8 w-px bg-gray-200 dark:bg-neutral-700 mx-2"></div>

          <!-- Champ email -->
          <div class="relative w-full !outline-0">
            <label for="email" class="sr-only">E-mail</label>
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <svg class="shrink-0 size-4 text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <input type="email" id="email" name="email"
              class="py-2 ps-9 pe-3 block outline-0 w-full border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-neutral-900 font-normal text-gray-950 dark:text-white dark:placeholder-neutral-400"
              :placeholder="texts?.contact?.emailPlaceholder" required />
          </div>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" :value="texts?.contact?.hiddenSubject" />

          <button type="submit"
            class="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-950 text-white hover:bg-gray-950 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200">
            {{ texts?.contact?.submit }}
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
      <!-- End Input -->
    </div>
    <!-- End Subscribe -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '../../composables'

export default defineComponent({
  name: 'ContactComponent',

  setup() {
    const { texts, locale } = useI18n('home')
    return {
      texts,
      locale,
    }
  },

  data() {
    return {}
  },

  methods: {},

  mounted() { },
})
</script>

<style scoped></style>
