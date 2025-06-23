<template>
  <div>
    <!-- Profile -->
    <div class="flex items-center gap-x-3">
      <div class="shrink-0 border border-gray-100 dark:border-neutral-700 rounded-full p-[1.5px]">
        <img
          class="shrink-0 size-24 rounded-full border-2 border-gray-200 dark:border-neutral-900 outline-2 outline-primary"
          src="@/assets/images/profil.jpg" alt="Avatar" width="150px" />
      </div>

      <div class="grow ml-1">
        <h1 class="text-4xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk">
          MakVieSAinte  
        </h1>
        <p class="text-writter relative text-md font-light text-gray-900 dark:text-neutral-400">
          FullStack developer and Web designer
        </p>
      </div>


    </div>
    <!-- End Profile -->

    <!-- About -->
    <div class="mt-8 mb-12">
      <p class="text-lg text-gray-800 dark:text-neutral-400 font-light">
        For over 4 years, I have been passionate about the world of
        computing. I have developed expertise in both front-end and
        back-end development, as well as in graphic design. My journey has
        allowed me to acquire a solid foundation of knowledge and
        technical skills, as well as the ability to effectively solve
        problems.
      </p>

      <div class="flex items-center flex-wrap gap-6 my-4"> 

        <div class="flex items-center h-full gap-2 hover:bg-primary/5 px-4 py-2 rounded-md poin cursor-pointer transition-all duration-150">
          <span class="pulse block w-2 h-2 bg-primary rounded-full border-1 border-green-200"></span>
          <span class="text-sm text-gray-800 font-normal dark:text-primary">Available for new opportunities</span>
        </div>
      </div>

    </div> 
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

<style scoped>

.pulse {
  animation: pulse-animation 1    s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(77, 255, 181);
  }
  100% {
    box-shadow: 0 0 0 4px rgb(77, 255, 181, 0.0);
  }
}

</style>
