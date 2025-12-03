<template>
  <div>
    <!-- Articles -->
    <div class="my-10 sm:my-14 relative">
      <h1 class="mb-2 text-3xl font-medium text-primary font-familjen_grotesk">
        {{ texts?.articles?.title }}
      </h1>
      <p class="text-md font-light text-gray-800 dark:text-neutral-400">
        {{ texts?.articles?.description }}
      </p>

      <ul class="space-y-10 mt-8" v-if="!loading && posts.length">
        <li v-for="post in posts.slice(0, 4)" :key="post.id">
          <p class="mb-2 text-sm text-gray-500 dark:text-neutral-300">
            {{ formatDate(post.publishedAt) }}
          </p>
          <h5 class="font-medium text-md text-gray-800 dark:text-white">
            {{ post.title }}
          </h5>
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-300">
            {{ post.brief }}
          </p>
          <p class="mt-1">
            <router-link
              class="text-sm text-primary underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-primary dark:hover:secondary"
              :to="`/article/${post.slug}`">
              {{ texts?.articles?.readMore }}
            </router-link>
          </p>
        </li>
      </ul>

      <p v-if="loading" class="text-gray-500">
        {{ texts?.articles?.loading }}
      </p>
      <p v-if="error" class="text-red-500 text-center my-10">{{ error }}</p>
    </div>
  </div>
  <!-- End Articles -->
</template>

<script lang="ts">
import axios from 'axios'
import { useI18n } from '../../composables'


export default {
  data() {
    return {
      posts: [] as any[],
      loading: true,
      error: null as string | null,
    }
  },

  created() {
    this.fetchArticles()
  },

  methods: {
    async fetchArticles() {
      const query = `
      query {
        publication(host: "capsule-tech-and-code.hashnode.dev") {
          posts(first: 4) {
            edges {
              node {
                id
                title
                brief
                slug
                publishedAt
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    `

      try {
        const response = await axios.post(
          'https://gql.hashnode.com/',
          {
            query,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        const edges = response.data?.data?.publication?.posts?.edges

        if (Array.isArray(edges)) {
          this.posts = edges.map((edge: any) => edge.node)
          console.log(this.posts)
        } else {
          this.error = 'Aucun article trouvé.'
          this.posts = []
        }
      } catch (err: any) {
        this.error = 'Erreur lors du chargement des articles.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },

    formatDate(dateStr: string): string {
      const date = new Date(dateStr)
      const now = new Date()
      const diff = Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
      )
      if (diff === 0) return "Aujourd'hui"
      if (diff === 1) return 'Hier'
      if (diff < 7) return `Il y a ${diff} jours`
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    },

    getArticleUrl(slug: string): string {
      return `https://geeky-chakri.hashnode.dev/${slug}`
    },
  },

  setup() {
    const { texts, locale } = useI18n('home')

    return {
      texts,
      locale,
    }
  },
}
</script>
