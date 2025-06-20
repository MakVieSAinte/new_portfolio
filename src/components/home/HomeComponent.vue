<template>
  <div class="box-main relative pt-32 pb-0 lg:px-12 md:px-8 sm:px-5 px-5 border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
    <!-- ========== MAIN CONTENT ========== -->
    <main class="">

      <!-- NavBar -->
      <NavBarComponent></NavBarComponent>
      <!-- End NavBar -->

      <!-- Heros -->
      <HerosComponent></HerosComponent>
      <!-- End Heros -->

      <!-- Fovorite -->
      <FavoriteComponent></FavoriteComponent>
      <!-- End Fovorite -->

      <!-- Projects -->
      <ProjectsComponent></ProjectsComponent>
      <!-- End Projects -->

      <!-- Skills -->
      <SkillsComponent></SkillsComponent>
      <!-- End Skills -->

      <!-- Works -->
      <WorksComponent></WorksComponent>
      <!-- End Works -->

      <!-- Articles -->
      <ArticlesComponent @article-selected="handleArticleSelected" />
      <!-- End Articles -->

      <!-- ArticleDetails -->
      <ArticlesDetailsComponent v-if="selectedSlug" :slug="selectedSlug" :key="selectedSlug" />
      <!-- End ArticleDetails -->

      <!-- Contact -->
      <ContactComponent></ContactComponent>
      <!-- End Contact -->

    </main>
    <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBarComponent from '../base/NavBarComponent.vue'
import HerosComponent from '../base/HerosComponent.vue'
import FavoriteComponent from '../base/FavoriteComponent.vue'
import ProjectsComponent from '../base/ProjectsComponent.vue'
import SkillsComponent from '../base/SkillsComponent.vue'
import WorksComponent from '../base/WorksComponent.vue'
import ArticlesComponent from '../base/ArticlesComponent.vue'
import ArticlesDetailsComponent from '../base/ArticleDetailComponent.vue'
import ContactComponent from '../base/ContactComponent.vue'

export default defineComponent({

  components: {
    NavBarComponent, HerosComponent, FavoriteComponent, ProjectsComponent, SkillsComponent, WorksComponent, ArticlesComponent, ArticlesDetailsComponent, ContactComponent
  },

  data() {
    return {
      selectedSlug: ''
    }
  },

  methods: {
    handleArticleSelected(slug: string) {
      this.selectedSlug = slug;
    }
  },

  mounted() {

  }
});

</script>

<style scoped>
.box-main {
  width: 56rem !important;
}

@media (max-width: 56rem) {
  .box-main {
    width: 100% !important;
  }
}
</style>
