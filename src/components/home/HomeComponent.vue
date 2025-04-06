<template>
  <div class="relative w-full py-6 px-8" style="width: 800px !important;">
    <!-- ========== MAIN CONTENT ========== -->
    <main>

      <!-- <div class="pt-10 md:pt-16 px-4 sm:px-6 lg:px-8 relative"> -->

      <!-- Heros -->
      <NavBarComponent></NavBarComponent>
      <!-- End Heros -->

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

      <!-- </div> -->
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

<style scoped></style>
