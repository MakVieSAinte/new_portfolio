<template>
  <div>
    <!-- Projects -->
    <div class="mt-10 sm:mt-12">
      <h1 class="mb-1 text-3xl font-medium text-primary font-familjen_grotesk">
        My Projects
      </h1>
      <p class="text-md font-light text-gray-800 dark:text-neutral-400">
        I love exploring new libraries and JavaScript frameworks 🪄. Here
        is a list of technologies that I have worked with.
      </p>



      <!-- Card Blog -->
      <div class="max-w-[85rem] px-2 py-10 sm:px-4 lg:px-0 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

          <!-- Card -->
          <div @mouseenter="playVideo" @mouseleave="stopVideo"
            class="group flex flex-col bg-slate-100/50 border border-neutral-200 rounded-lg dark:bg-neutral-800/30 dark:border-neutral-800 overflow-hidden h-[266px] p-[7px] relative">

            <div class="w-full h-max flex items-center justify-start gap-1 mb-[2px] pl-[3px]">
              <span
                class="w-[8px] h-[8px] border-neutral-100 dark:bg-neutral-700 rounded-full group-hover:bg-red-600 transition-all duration-100"></span>
              <span
                class="w-[8px] h-[8px] border-neutral-100 dark:bg-neutral-700 rounded-full group-hover:bg-yellow-600 transition-all duration-100"></span>
              <span
                class="w-[8px] h-[8px] border-neutral-100 dark:bg-neutral-700 rounded-full group-hover:bg-green-600 transition-all duration-100"></span>
            </div>

            <div class="group w-full h-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden rounded-md mt-2">
              <video v-if="isHovering" ref="videoPlayer" src="@/assets/videos/nature-moi.mp4"
                class="w-full h-full object-cover" height="800px" muted></video>
              <img v-else src="@/assets/images/projets/nature-moi.png" alt="image projet"
                class="group-hover:scale-125 object-cover w-full h-full transition-all duration-300" />
            </div>

            <div class="absolute bottom-0 w-full h-max mt-2 bg-transparent px-auto flex items-center justify-center">
              <div
                class="flex items-center justify-between backdrop-blur-sm bg-gray-400/20 dark:bg-neutral-800/60 w-[70%] h-max py-2 px-3 mt-2  mx-auto rounded-t-md text-left border-t border-x border-neutral-200/30 dark:border-neutral-600/40">
                <p class="text-neutral-700 dark:text-white text-sm font-medium">
                  Nature Emoi
                </p>
                <div
                  class="p-1 border border-transparent group-hover:border-neutral-200/30 dark:group-hover:border-neutral-600/30 rounded-full transition-all duration-300">
                  <a href="https://nature-emoi.vercel.app/" target="_blank"
                    class="text-neutral-700 dark:text-white text-sm font-medium hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-3 group-hover:-rotate-45 transition-all duration-[5s]">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                  </a>
                </div>
              </div>
            </div>

            <!-- link -->
            <a href="https://nature-emoi.vercel.app/" target="_blank" class="absolute inset-0 z-50">


            </a>

          </div>
          <!-- End Card -->





















        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Blog -->

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: "ProjectsComponent",

  data() {
    return {
      isHovering: false
    }
  },

  methods: {
    playVideo() {
      this.isHovering = true
      // Attendre que la vidéo soit affichée avant de lancer la lecture
      this.$nextTick(() => {
        const videoElement = this.$refs.videoPlayer as HTMLVideoElement;
        if (videoElement) {
          videoElement.play();
        }
      })
    },
    stopVideo() {
      this.isHovering = false
      const videoElement = this.$refs.videoPlayer as HTMLVideoElement;
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  },

  mounted() {

  }
});
</script>

<style scoped></style>
