<template>
  <div>
    <!-- Profile -->
    <div class="flex items-center gap-x-3">
      <div class="shrink-0 border border-gray-100 dark:border-gray-700 rounded-full">
        <img
          class="shrink-0 size-24 rounded-full border-2 border-gray-200 dark:border-gray-900 outline-2 outline-primary"
          src="@/assets/images/profil.jpg" alt="Avatar" width="150px" />
      </div>

      <div class="grow ml-3">
        <h1 class="text-4xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk">
          MakVieSAinte
        </h1>
        <p class="text-writter relative text-md font-light text-gray-900 dark:text-neutral-400">
          FullStack developer and Web designer
        </p>
      </div>

          <!-- Dark Mode Switch -->
    <button
      id="theme-toggle"
      class="fixed top-0 right-0 p-2 text-gray-500 bg-slate-50 rounded-lg hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-neutral-100"
      aria-label="Toggle dark mode"
    >
      <!-- Sun icon -->
      <svg
        id="theme-toggle-light-icon"
        class="hidden w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >lllllllllllllllllllllllllllll
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        />
      </svg>
      <!-- Moon icon -->
      <svg
        id="theme-toggle-dark-icon"
        class="hidden w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
    </button>

    </div>
    <!-- End Profile -->

    <!-- About -->
    <div class="mt-8">
      <p class="text-lg text-gray-800 dark:text-neutral-400 font-light">
        For over 4 years, I have been passionate about the world of
        computing. I have developed expertise in both front-end and
        back-end development, as well as in graphic design. My journey has
        allowed me to acquire a solid foundation of knowledge and
        technical skills, as well as the ability to effectively solve
        problems.
      </p>

      <div class="flex items-center flex-wrap gap-6 mt-8">

        <!-- Card -->
        <!-- <div
          class="!w-[30px] flex flex-col h-full bg-white border dark:border-red-500 !border-orange-400 rounded-md dark:bg-neutral-900 pr-8"
          style="width: max-content;">
          <div class="p-1 md:p-2 flex gap-x-4">
            <div
              class="shrink-0 flex justify-center items-center w-6 h-6 overflow-hidden bg-gray-100 rounded-md dark:bg-neutral-800">
              <img src="@/assets/images/hashnode.png" alt="hashnode" width="100%" height="100%" />
            </div>

            <div class="flex items-center justify-center gap-x-2">
              <p class="text-sm text-gray-800 dark:text-neutral-300">
                Hashnode
              </p>
            </div>
          </div>
        </div> -->
        <!-- End Card -->

        <!-- <div class="flex items-center h-full gap-2">
          <span class="block w-3 h-3 bg-primary rounded-full border-1 border-green-200"></span>
          <span class="text-sm text-gray-800 dark:text-neutral-300">Available for work</span>
        </div> -->
      </div>

    </div>
    <!-- End About -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: "HerosComponent",

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
