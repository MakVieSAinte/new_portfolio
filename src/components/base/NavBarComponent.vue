<template>
  <div>
    <!-- NavBar -->
    <div class="fixed md:top-10 max-md:bottom-5 inset-x-0 text-center z-50">
      <div
        class="inline-block backdrop-blur-sm md:bg-white/50 max-md:bg-white/60 rounded-full py-3 px-4 md:dark:bg-neutral-800/50 max-md:dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-600 z-50">
        <div class="flex items-center gap-x-1">
          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              Home
            </button>
          </div>
          <!-- Button -->

          <div class="block h-3 border-e border-gray-300 mx-2 dark:border-neutral-600"></div>

          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              Projects
            </button>
          </div>
          <!-- Button -->

          <div class="block h-3 border-e border-gray-300 mx-2 dark:border-neutral-600"></div>

          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              About
            </button>
          </div>
          <!-- Button -->

          <div class="block h-3 border-e border-gray-300 mx-2 dark:border-neutral-600"></div>

          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 font-medium max-md:text-md md:text-sm text-neutral-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-white dark:focus:text-white transition-colors duration-150">
              Blog
            </button>
          </div>
          <!-- Button -->

          <div class="block h-3 border-e border-gray-300 mx-2 dark:border-neutral-600"></div>

          <a href="http://">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
              class="bi bi-linkedin max-md:text-md md:text-sm text-neutral-500 dark:text-neutral-400 dark:hover:text-white hover:text-neutral-900 transition-colors duration-150"
              viewBox="0 0 16 16">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- End NavBar -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: 'NavBarComponent',

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
