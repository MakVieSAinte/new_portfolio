<template>
  <div>
    <!-- Profile -->
    <div class="flex items-center gap-x-3">
      <div class="shrink-0 border border-gray-300 dark:border-neutral-800 rounded-full p-[2.5px]">
        <img class="shrink-0 size-24 rounded-full object-cover object-center" src="@/assets/images/profil.jpg"
          alt="Avatar" width="150px" />
      </div>

      <div id="bmc-button-container"></div>

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
      <p class="inline-block text-lg text-gray-800 dark:text-neutral-400 font-light">
        For over 4 years, I have been passionate about the world of
        computing. I have developed expertise <a href="linkedin" class="inline-block group bg-slate-100/50 dark:bg-neutral-800 px-3 py-[6px] rounded-[3px] hover:bg-slate-100/50 dark:hover:bg-neutral-700/50 border-neutral-300 dark:border-neutral-700  transition-all duration-500">
          <span class="flex items-center justify-center gap-[6px] font-medium !text-[16px] text-gray-800 dark:text-neutral-200 dark:group-hover:dark:text-neutral-100 group-hover:dark:text-gray-900 leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-linkedin"
            viewBox="0 0 16 16">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg> <span class="group-hover:underline underline-offset-2 transition-all duration-200">LinkedIn</span>
          </span>
          </a> in both front-end and
        back-end development, as well as in graphic design. My journey has
        allowed me to acquire a solid  foundation of knowledge and
        technical skills, as well as the ability to effectively solve
        problems <a href="linkedin" class="inline-block group bg-slate-100/50 dark:bg-neutral-800 px-3 py-[6px] rounded-[3px] hover:bg-slate-100/50 dark:hover:bg-neutral-700/50 border-neutral-300 dark:border-neutral-700 transition-all duration-500">
          <span class="flex items-center justify-center gap-[6px] font-medium !text-[16px] text-gray-800 dark:text-neutral-200 dark:group-hover:dark:text-neutral-100 group-hover:dark:text-gray-900 leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
</svg> <span class="group-hover:underline underline-offset-2 transition-all duration-200">download CV.</span>
          </span>
          </a>

      </p>

      <div class="flex items-center flex-wrap gap-6 my-4">

        <div
          class="flex items-center h-full gap-2 border border-neutral-200/30 dark:border-neutral-800 hover:bg-primary/20 dark:hover:bg-primary/5 px-4 py-2 rounded-md poin cursor-pointer transition-all duration-150">
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
    // Vérifie si le script n'est pas déjà chargé
    if (!document.getElementById('bmc-script')) {
      const script = document.createElement('script')
      script.id = 'bmc-script'
      script.type = 'text/javascript'
      script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js'
      script.setAttribute('data-name', 'bmc-button')
      script.setAttribute('data-slug', 'MakVieSAinte')
      script.setAttribute('data-color', '#FFDD00')
      script.setAttribute('data-emoji', '')
      script.setAttribute('data-font', 'Cookie')
      script.setAttribute('data-text', 'Offrez-moi un café')
      script.setAttribute('data-outline-color', '#000000')
      script.setAttribute('data-font-color', '#000000')
      script.setAttribute('data-coffee-color', '#ffffff')
      document.getElementById('bmc-button-container')?.appendChild(script)
    }
  }
});
</script>

<style scoped>
.pulse {
  animation: pulse-animation 0.95s infinite;
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
