<template>
  <div
    class="box-main relative pt-32 max-md:pt-24 pb-0 lg:px-12 md:px-6 sm:px-4 px-4 border-x bg-white dark:bg-neutral-900/60 border-neutral-200/40 dark:border-neutral-800"
  >
    <!-- ========== MAIN CONTENT ========== -->
    <main class="pt-3">
      <!-- NavBar -->
      <NavBarComponent></NavBarComponent>
      <!-- End NavBar -->

      <!-- Heros -->
      <HerosComponent></HerosComponent>
      <!-- End Heros -->

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

export default defineComponent({
  components: {
    NavBarComponent,
    HerosComponent,
    FooterComponent,
  },

  data() {
    return {}
  },

  methods: {},

  mounted() {},
})
</script>

<style scoped></style>
