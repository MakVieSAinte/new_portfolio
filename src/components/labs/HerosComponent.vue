<template>
  <div>
    <!-- Profile -->
    <div class="flex items-center gap-x-3">
      <div class="grow ml-1">
        <h1
          class="text-5xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk"
        >
          {{ texts?.pageLabs?.title }} <br />
          {{ texts?.pageLabs?.title2 }}
        </h1>
      </div>
    </div>
    <!-- End Profile -->

    <!-- About -->
    <div class="mt-8 mb-12">
      <p
        class="inline-block text-lg text-gray-800 dark:text-neutral-400 font-light"
      >
        {{ texts?.pageLabs?.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '../../composables'

export default defineComponent({
  name: 'HerosComponent',

  data() {
    return {}
  },

  methods: {},

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
  },

  setup() {
    const { texts, locale } = useI18n('home')

    return {
      texts,
      locale,
    }
  },
})
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
    box-shadow: 0 0 0 4px rgb(77, 255, 181, 0);
  }
}
</style>
