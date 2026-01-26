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
              :to="`/article/${post.slug}`"
            >
              {{ texts?.articles?.readMore }}
            </router-link>
          </p>
        </li>
      </ul>

      <!-- Loading Spinner -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="relative">
          <div class="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <div class="absolute inset-0 flex items-center justify-center"></div>
        </div>
        <span class="ml-4 text-gray-600 dark:text-gray-300">{{ texts?.articles?.loading }}</span>
      </div>
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
        } else {
          this.error = this.texts?.articles?.noArticles || 'Aucun article trouvé.'
          this.posts = []
        }
      } catch (err: any) {
        this.error = this.texts?.articles?.error || 'Erreur lors du chargement des articles.'
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

      if (diff === 0) return this.texts?.articles?.date?.today || "Aujourd'hui"
      if (diff === 1) return this.texts?.articles?.date?.yesterday || 'Hier'
      if (diff < 7) {
        return (this.texts?.articles?.date?.daysAgo || 'Il y a {n} jours').replace(
          '{n}',
          diff.toString(),
        )
      }

      return date.toLocaleDateString(this.locale === 'fr' ? 'fr-FR' : 'en-US', {
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
