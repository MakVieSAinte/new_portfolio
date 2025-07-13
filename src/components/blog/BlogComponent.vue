<template>
  <div class="box-main relative pt-32 max-md:pt-16 pb-0 lg:px-12 md:px-8 sm:px-5 px-5 border-x bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
    <!-- ========== MAIN CONTENT ========== -->
    <main class="pt-3">
      <!-- NavBar -->
      <NavBarComponent></NavBarComponent>
      <!-- End NavBar -->

      <!-- Heros -->
      <HerosComponent></HerosComponent>
      <!-- End Heros -->

             <!-- Articles -->
      <ArticlesComponent @article-selected="handleArticleSelected" />
      <!-- End Articles -->

      <!-- ArticleDetails -->
      <ArticlesDetailsComponent v-if="selectedSlug" :slug="selectedSlug" :key="selectedSlug" />
      <!-- End ArticleDetails -->
      
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
import ArticlesComponent from '../blog/ArticlesComponent.vue'
import ArticlesDetailsComponent from '../blog/ArticleDetailComponent.vue'


export default defineComponent({

  components: {
    NavBarComponent, HerosComponent, FooterComponent, ArticlesComponent, ArticlesDetailsComponent
  },

  data() {
    return {
      selectedSlug: '',
    }
  },

  methods: {
    handleArticleSelected(slug: string) {
      this.selectedSlug = slug;
    },
  },

  mounted() {
  }
});

</script>

<style scoped>
</style>
