<template>
  <div>
      <!-- Card Blog -->
      <div class="max-w-[85rem] px-2 py-0 sm:px-4 lg:px-0 lg:py-4 mx-auto">
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
                <p class="text-neutral-100 dark:text-white text-sm font-medium">
                  Nature Emoi
                </p>
                <div
                  class="p-1 border border-transparent group-hover:border-neutral-100/30 dark:group-hover:border-neutral-600/30 rounded-full transition-all duration-300">
                  <a href="https://nature-emoi.vercel.app/" target="_blank"
                    class="text-neutral-100 dark:text-white text-sm font-medium hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-3 group-hover:-rotate-45 transition-all duration-[1s]">
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
                <p class="text-neutral-100 dark:text-white text-sm font-medium">
                  Nature Emoi
                </p>
                <div
                  class="p-1 border border-transparent group-hover:border-neutral-100/30 dark:group-hover:border-neutral-600/30 rounded-full transition-all duration-300">
                  <a href="https://nature-emoi.vercel.app/" target="_blank"
                    class="text-neutral-100 dark:text-white text-sm font-medium hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-3 group-hover:-rotate-45 transition-all duration-[1s]">
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

      <div class="w-full bg-red-600">


        <div class="w-full max-w-4xl mx-auto">
    <div class="flex space-x-2 mb-4 border-b border-gray-300">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[
          'px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none',
          activeTab === tab ? 'bg-white text-black border-t border-l border-r border-gray-300' : 'bg-gray-100 text-gray-500'
        ]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div v-if="activeTab !== 'Preview'">
      <pre class="bg-gray-900 text-white rounded p-4 overflow-auto text-sm">
        <code :class="'language-' + activeTab.toLowerCase()" v-html="highlightedCode" />
      </pre>
    </div>

    <div v-else class="border rounded-md overflow-hidden">
      <iframe
        :srcdoc="previewContent"
        class="w-full h-96 border-0"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>

  

<iframe src="https://codesandbox.io/embed/lhlmss?view=editor+%2B+preview&module=%2Findex.html&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="test"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

  
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
