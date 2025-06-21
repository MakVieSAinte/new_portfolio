<template>
  <div>

    <!-- Subscribe -->
    <div class="my-10 sm:my-14">
      <h1 class="mb-1 text-3xl font-medium text-primary font-familjen_grotesk">
        Contact me
      </h1>

      <!-- Input -->
      <form>
        <div
          class="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700">
          <div class="relative w-full !outline-0">
            <label for="hero-input" class="sr-only">Subscribe</label>
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <svg class="shrink-0 size-4 text-gray-400 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <input type="text" id="hero-input" name="hero-input"
              class="py-2 ps-9 pe-3 block outline-0 w-full border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-400 "
              placeholder="Enter your email" />
          </div>
          <a class="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
            href="#">
            Subscribe
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <p class="mt-2 text-xs text-gray-500 dark:text-neutral-400">
          Code, tools, insights — straight to your inbox. Unsubscribe anytime.
        </p>
      </form>
      <!-- End Input -->
    </div>
    <!-- End Subscribe -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: "ContactComponent",

  data() {
    return {

    }
  },

  methods: {

  },

  mounted() {

  }
});
</script>

<style scoped></style>
