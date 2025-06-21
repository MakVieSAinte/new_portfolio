<script lang="ts">
import { defineComponent } from 'vue'
import TheArticleDetailComponent from '../components/base/ArticleDetailComponent.vue'

export default defineComponent({
  components: { TheArticleDetailComponent },
  props: {
    slug: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <main>
    <TheArticleDetailComponent :slug="slug" />
  </main>
</template>
