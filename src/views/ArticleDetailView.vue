<script lang="ts">
import { defineComponent } from 'vue'
import TheArticleDetailComponent from '../components/blog/ArticleDetailComponent.vue'
import NavBarComponent from '@/components/base/NavBarComponent.vue'

export default defineComponent({
  components: { NavBarComponent, TheArticleDetailComponent },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <main>
    <NavBarComponent />
    <TheArticleDetailComponent v-reveal :slug="slug" />
  </main>
</template>
