<template>
  <div
    class="box-main relative pt-32 max-md:pt-24 pb-0 lg:px-20 md:px-12 sm:px-10 px-10 border-x bg-white dark:bg-neutral-900/60 border-neutral-200/40 dark:border-neutral-800"
  >
    <!-- ========== MAIN CONTENT ========== -->
    <main class="pt-3">
      <!-- NavBar -->
      <NavBarComponent></NavBarComponent>
      <!-- End NavBar -->

      <!-- Heros -->
      <HerosComponent v-reveal></HerosComponent>
      <!-- End Heros -->

      <!-- Fovorite -->
      <FavoriteComponent v-reveal></FavoriteComponent>
      <!-- End Fovorite -->

      <!-- Projects -->
      <ProjectsComponent v-reveal></ProjectsComponent>
      <!-- End Projects -->

      <!-- Skills -->
      <SkillsComponent v-reveal></SkillsComponent>
      <!-- End Skills -->

      <!-- Works -->
      <WorksComponent v-reveal></WorksComponent>
      <!-- End Works -->

      <!-- Articles -->
      <ArticlesComponent v-reveal @article-selected="handleArticleSelected" />
      <!-- End Articles -->

      <!-- ArticleDetails -->
      <ArticlesDetailsComponent
        v-reveal
        v-if="selectedSlug"
        :slug="selectedSlug"
        :key="selectedSlug"
      />
      <!-- End ArticleDetails -->

      <!-- FAQ -->
      <FAQComponent v-reveal></FAQComponent>
      <!-- End FAQ -->

      <!-- Contact -->
      <ContactComponent v-reveal></ContactComponent>
      <!-- End Contact -->

      <!-- Footer -->
      <FooterComponent v-reveal></FooterComponent>
      <!-- End Footer -->
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBarComponent from '../base/NavBarComponent.vue'
import HerosComponent from './HerosComponent.vue'
import FavoriteComponent from './FavoriteComponent.vue'
import ProjectsComponent from './ProjectsComponent.vue'
import SkillsComponent from './SkillsComponent.vue'
import WorksComponent from './WorksComponent.vue'
import ArticlesComponent from './ArticlesComponent.vue'
import ArticlesDetailsComponent from './ArticleDetailComponent.vue'
import FAQComponent from './FAQComponent.vue'
import ContactComponent from './ContactComponent.vue'
import FooterComponent from '../base/FooterComponent.vue'

export default defineComponent({
  components: {
    NavBarComponent,
    HerosComponent,
    FavoriteComponent,
    ProjectsComponent,
    SkillsComponent,
    WorksComponent,
    ArticlesComponent,
    ArticlesDetailsComponent,
    ContactComponent,
    FAQComponent,
    FooterComponent,
  },

  data() {
    return {
      selectedSlug: '',

      nom: '',
      prenom: '',
      users: [],
    }
  },

  methods: {
    handleArticleSelected(slug: string) {
      this.selectedSlug = slug
    },
  },

  mounted() {},
})
</script>

<style scoped></style>
