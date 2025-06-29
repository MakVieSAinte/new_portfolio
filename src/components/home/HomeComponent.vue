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

      <!-- FAQ -->
      <FAQComponent></FAQComponent>
      <!-- End FAQ -->

      <!-- Contact -->
      <ContactComponent></ContactComponent>
      <!-- End Contact -->
      
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
import HerosComponent from '../base/HerosComponent.vue'
import FavoriteComponent from '../base/FavoriteComponent.vue'
import ProjectsComponent from '../base/ProjectsComponent.vue'
import SkillsComponent from '../base/SkillsComponent.vue'
import WorksComponent from '../base/WorksComponent.vue'
import ArticlesComponent from '../base/ArticlesComponent.vue'
import ArticlesDetailsComponent from '../base/ArticleDetailComponent.vue'
import FAQComponent from '../base/FAQComponent.vue'
import ContactComponent from '../base/ContactComponent.vue'
import FooterComponent from '../base/FooterComponent.vue'


export default defineComponent({

  components: {
    NavBarComponent, HerosComponent, FavoriteComponent, ProjectsComponent, SkillsComponent, WorksComponent, ArticlesComponent, ArticlesDetailsComponent, ContactComponent, FAQComponent, FooterComponent
  },

  data() {
    return {
      selectedSlug: '',

      nom: '',
      prenom: '',
      users: []
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
