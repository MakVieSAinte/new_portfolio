<template>
  <div
    class="box-main relative pt-32 max-md:pt-24 pb-0 lg:px-20 md:px-12 max-sm:px-2 sm:px-4 border-x bg-white dark:bg-neutral-900/60 border-neutral-200/40 dark:border-neutral-800 min-h-screen overflow-x-hidden w-full max-w-full">
    <router-link
      class="inline-flex items-center gap-x-1.5 text-sm text-neutral-500 decoration-2 hover:underline focus:outline-hidden focus:underline dark:text-primary min-h-10 px-3 py-2 rounded transition-colors"
      to="/blog" aria-label="Back to blog home">
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true">
        <path d="m15 18-6-6 6-6" />
      </svg>
      Back to Blog
    </router-link>

    <h1 v-if="article"
      class="text-2xl md:text-4xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 leading-tight text-gray-800 dark:text-white break-words">
      {{ article.title }}
    </h1>

    <!-- Prose : typographie stylée automatiquement -->
    <div v-if="article"
      class="prose prose-sm md:prose lg:prose-lg prose-neutral dark:prose-invert w-full max-w-full [&>*]:max-w-full [&_*]:max-w-full [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_code]:text-xs md:[&_code]:text-sm [&_table]:max-w-full [&_table]:text-xs md:[&_table]:text-sm [&_table]:overflow-x-auto [&_img]:max-w-full [&_img]:h-auto [&_blockquote]:break-words [&_p]:break-words [&_h2]:break-words [&_h3]:break-words"
      v-html="article.content.html"></div>

    <div v-if="article" class="sticky bottom-6 inset-x-0 text-center max-md:hidden">
      <div class="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
        <div class="flex items-center gap-x-1.5">
          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 min-h-10 px-2 py-1 rounded transition-colors"
              aria-label="Like this article">
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true">
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span>{{ article.reactionCount }} Likes</span>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black"
                role="tooltip">
                Like this article
              </span>
            </button>
          </div>
          <!-- Button -->

          <div class="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 min-h-10 px-2 py-1 rounded transition-colors"
              aria-label="View article comments">
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true">
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
              <span>{{ article.replyCount }} Comments</span>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black"
                role="tooltip">
                View article comments
              </span>
            </button>
          </div>
          <!-- Button -->

          <div class="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

          <!-- Button -->
          <div class="hs-dropdown relative inline-flex">
            <button id="hs-blog-article-share-dropdown" type="button"
              class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" x2="12" y1="2" y2="15" />
              </svg>
              Share
            </button>
            <div
              class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-neutral-950"
              role="menu" aria-orientation="vertical" aria-labelledby="hs-blog-article-share-dropdown">
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Copy link
              </a>
              <div class="border-t border-gray-600 my-2 dark:border-neutral-800"></div>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                Share on Twitter
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                Share on Facebook
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                Share on LinkedIn
              </a>
            </div>
          </div>
          <!-- Button -->
        </div>
      </div>
    </div>
    <!-- End Sticky Share Group -->

    <p v-if="loading" class="text-gray-500">Chargement...</p>
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: null as any | null,
      loading: true,
      error: null as string | null,
    }
  },
  async created() {
    const query = `
      query {
        publication(host: "capsule-tech-and-code.hashnode.dev") {
          post(slug: "${this.slug}") {
            title
            content {
              html
            }
              reactionCount
              replyCount

          }
        }
      }
    `

    try {
      const res = await axios.post(
        'https://gql.hashnode.com/',
        { query },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const post = res.data?.data?.publication?.post
      if (post) {
        post.content.html = this.optimizeHTML(post.content.html)
        this.article = post
      } else {
        this.error = 'Article introuvable.'
      }
    } catch (err) {
      this.error = 'Erreur de chargement de l’article.'
    } finally {
      this.loading = false
    }
  },
  methods: {
    optimizeHTML(html: string): string {
      let optimized = html
        // Remove problematic inline styles
        .replace(/style="[^"]*width:\s*\d+(?:px|%)[^"]*"/g, '')
        .replace(/style="[^"]*max-width:\s*[^"]*"/g, '')
        .replace(/style="[^"]*min-width:\s*[^"]*"/g, '')
        // Keep other inline styles but clean them
        .replace(/style=""/g, '')

      optimized = optimized
        .replace(/<ul/g, '<ul class="list-disc my-4 pl-10 w-full"')
        .replace(/<ol/g, '<ol class="list-decimal pl-6 w-full"')
        // Fix heading order: h2 becomes h2 after h1
        .replace(/<h1/g, '<h2 class="text-3xl mt-8 mb-2 font-bold w-full"')
        .replace(/<h2/g, '<h3 class="text-2xl mt-8 mb-4 font-bold w-full"')
        .replace(/<h3/g, '<h4 class="text-xl mt-6 mb-3 font-semibold w-full"')
        .replace(/<p/g, '<p class="my-5 w-full break-words"')
        .replace(/<p(?=\s*><code)/g, '<p class="mt-5 code-paragraph mb-8 w-full"')
        .replace(/<pre(?=\s*><code)/g, '<pre class="mt-8 code-paragraph mb-8 w-full overflow-x-auto"')
        .replace(/<blockquote/g, '<blockquote class="my-4 pl-4 border-l-4 w-full"')
        .replace(/<table/g, '<table class="w-full overflow-x-auto"')
        .replace(/<div/g, '<div class="w-full"')

      // Add alt text and lazy loading to images, force responsive
      optimized = optimized.replace(
        /<img\s+src="([^"]+)"([^>]*)>/g,
        (match, src, attrs) => {
          // Remove width/height from attrs if present
          const cleanAttrs = attrs
            .replace(/\s+width="[^"]*"/g, '')
            .replace(/\s+height="[^"]*"/g, '')
            .replace(/\s+style="[^"]*"/g, '')

          // Check if alt already exists
          if (cleanAttrs.includes('alt=')) {
            return `<img src="${src}"${cleanAttrs} loading="lazy" class="w-full h-auto max-w-full" />`
          }
          // Generate alt text from src if needed
          const altText = src.split('/').pop()?.split('.')[0] || 'Article image'
          return `<img src="${src}" alt="${altText}"${cleanAttrs} loading="lazy" class="w-full h-auto max-w-full" />`
        },
      )

      return optimized
    },
  },
})
</script>

<style>
/* Styles personnalisés si tu n’utilises pas Tailwind Prose */

body {
  line-height: 1.9 !important;
}

p,
span,
h1,
h2,
h3,
h4 {
  background-color: transparent !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  max-width: 100% !important;
}

pre {
  background-color: #1e1e1e;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  contain: content;
  /* Isolate rendering context */
}

.prose pre {
  background-color: #1e293b !important;
  color: #f1f5f9 !important;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box;
  font-size: 0.85rem !important;
  contain: content;
}

.prose code {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
  max-width: 100% !important;
}

p code {
  background-color: #f3f4f6;
  color: #000;
  font-weight: 800;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}

/* Image optimization - prevent CLS and improve LCP */
.prose img {
  max-width: 100% !important;
  height: auto !important;
  width: 100% !important;
  display: block !important;
  aspect-ratio: 2;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
}

.prose>* {
  max-width: 100% !important;
  width: 100% !important;
}

.prose table {
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
}

.prose {
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

html,
body {
  width: 100% !important;
  overflow-x: hidden !important;
}

/* Optimize animations - use will-change sparingly */
button {
  will-change: auto;
}

button:hover {
  will-change: background-color, color;
}

/* Reduce CLS with GPU-accelerated transforms */
.transition-colors {
  will-change: background-color, color;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Fix sticky element position to prevent layout shift */
.sticky {
  contain: layout;
}

/* Mobile optimization */
@media (max-width: 768px) {
  .box-main {
    padding-left: max(0.5rem, env(safe-area-inset-left)) !important;
    padding-right: max(0.5rem, env(safe-area-inset-right)) !important;
  }

  .prose {
    font-size: 0.95rem;
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
  }

  .prose * {
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  .prose>* {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .prose pre {
    padding: 0.75rem;
    font-size: 0.7rem !important;
    margin: 1rem 0 !important;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .prose code {
    font-size: 0.7rem !important;
  }

  .prose p {
    word-break: break-word !important;
    overflow-wrap: break-word !important;
    width: 100% !important;
    overflow-x: hidden !important;
  }

  .prose blockquote {
    word-break: break-word !important;
    overflow-wrap: break-word !important;
    margin: 1rem 0.5rem !important;
    padding: 0.75rem !important;
  }

  .prose h1,
  .prose h2,
  .prose h3,
  .prose h4,
  .prose h5,
  .prose h6 {
    word-break: break-word !important;
    overflow-wrap: break-word !important;
    width: 100% !important;
    overflow-x: hidden !important;
  }

  .prose img {
    max-width: 100% !important;
    height: auto !important;
    width: 100% !important;
  }

  .prose table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    width: 100% !important;
    font-size: 0.7rem;
    -webkit-overflow-scrolling: touch;
  }

  .prose table * {
    white-space: nowrap;
  }

  .prose strong,
  .prose em {
    word-break: break-word !important;
  }

  .prose ul,
  .prose ol {
    margin: 1rem 0 !important;
    padding-left: 1.5rem !important;
    width: 100% !important;
  }

  [role="menu"] {
    max-width: calc(100vw - 1rem) !important;
  }
}


.prose ul,
.prose ol {
  padding-left: 1.25rem !important;
}

.prose h1,
.prose h2,
.prose h3 {
  word-break: break-word !important;
}


/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
