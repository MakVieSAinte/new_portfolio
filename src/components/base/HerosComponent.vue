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
        <h1 class="text-4xl font-medium text-gray-800 dark:text-neutral-300 font-familjen_grotesk">
          MakVieSAinte
        </h1>
        <p class="text-writter relative text-md font-light text-gray-900 dark:text-slate-400">
          FullStack developer and Web designer
        </p>
        <div class="flex items-center gap-2 mt-1">
          <span class="block w-3 h-3 bg-primary rounded-full border-1 border-green-200"></span>
          <span class="text-sm text-gray-800 dark:text-neutral-300">Available for work</span>
        </div>
      </div>
    </div>
    <!-- End Profile -->

    <!-- About -->
    <div class="mt-8">
      <p class="text-lg text-gray-800 dark:text-slate-300 font-light">
        For over 4 years, I have been passionate about the world of
        computing. I have developed expertise in both front-end and
        back-end development, as well as in graphic design. My journey has
        allowed me to acquire a solid foundation of knowledge and
        technical skills, as well as the ability to effectively solve
        problems.
      </p>
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
