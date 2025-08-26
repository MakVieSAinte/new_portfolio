<template>
  <div
    class="box-main relative pt-32 max-md:pt-16 pb-0 lg:px-12 md:px-8 sm:px-5 px-5 border-x bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
  >
    <!-- ========== MAIN CONTENT ========== -->
    <main class="pt-3">
      <!-- NavBar -->
      <NavBarComponent></NavBarComponent>
      <!-- End NavBar -->

      <!-- Heros -->
      <HerosComponent></HerosComponent>
      <!-- End Heros -->

      <!-- Source Code -->
      <SourceCodeComponent></SourceCodeComponent>
      <!-- End Source Code -->

      <!-- Footer -->
      <FooterComponent></FooterComponent>
      <!-- End Footer -->
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBarComponent from '../base/NavBarComponent.vue'
import FooterComponent from '../base/FooterComponent.vue'
import HerosComponent from './HerosComponent.vue'
import SourceCodeComponent from './SourceCodeComponent.vue'

export default defineComponent({
  components: {
    NavBarComponent,
    HerosComponent,
    FooterComponent,
    SourceCodeComponent,
  },

  data() {
    return {}
  },

  methods: {},

  mounted() {},
})
</script>

<style scoped></style>
