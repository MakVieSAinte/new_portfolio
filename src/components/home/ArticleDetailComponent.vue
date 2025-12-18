<template>
  <div
    class="box-main mx-auto pt-32 pb-10 px-8 lg:px-12 md:px-8 sm:px-5 border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 !text-gray-800 !dark:text-neutral-400"
  >
    <router-link
      class="inline-flex items-center gap-x-1.5 text-sm text-neutral-500 decoration-2 hover:underline focus:outline-hidden focus:underline dark:text-primary"
      to="/"
    >
      <svg
        class="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      Back to Blog
    </router-link>

    <h1
      v-if="article"
      class="text-4xl font-bold mt-8 mb-6 text-gray-800 dark:text-white"
    >
      {{ article.title }}
    </h1>

    <!-- Prose : typographie stylée automatiquement -->
    <div
      v-if="article"
      class="prose prose-neutral dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 article-content"
      v-html="article.content.html"
    ></div>

    <div v-if="article" class="sticky bottom-6 inset-x-0 text-center">
      <div
        class="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800"
      >
        <div class="flex items-center gap-x-1.5">
          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button
              type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            >
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                />
              </svg>
              {{ article.reactionCount }}
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black"
                role="tooltip"
              >
                Like
              </span>
            </button>
          </div>
          <!-- Button -->

          <div
            class="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"
          ></div>

          <!-- Button -->
          <div class="hs-tooltip inline-block">
            <button
              type="button"
              class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            >
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
              {{ article.replyCount }}
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black"
                role="tooltip"
              >
                Comment
              </span>
            </button>
          </div>
          <!-- Button -->

          <div
            class="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"
          ></div>

          <!-- Button -->
          <div class="hs-dropdown relative inline-flex">
            <button
              id="hs-blog-article-share-dropdown"
              type="button"
              class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" x2="12" y1="2" y2="15" />
              </svg>
              Share
            </button>
            <div
              class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-neutral-950"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-blog-article-share-dropdown"
            >
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  />
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  />
                </svg>
                Copy link
              </a>
              <div
                class="border-t border-gray-600 my-2 dark:border-neutral-800"
              ></div>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  />
                </svg>
                Share on Twitter
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  />
                </svg>
                Share on Facebook
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href="#"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
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
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'
import 'prismjs/themes/prism-tomorrow.css'

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
        // Application de la coloration syntaxique avec Prism
        post.content.html = this.applyPrismSyntaxHighlighting(post.content.html)

        this.article = post
        // console.log(this.article) // Commenté pour éviter les logs en prod
      } else {
        this.error = 'Article introuvable.'
      }
    } catch (err) {
      this.error = 'Erreur de chargement de l’article.'
      console.error(err)
    } finally {
      this.loading = false
    }
  },

  methods: {
    applyPrismSyntaxHighlighting(html: string): string {
      // Crée un élément temporaire pour manipuler le HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html

      const codeBlocks = document.querySelectorAll<HTMLElement>('pre code')

      codeBlocks.forEach(codeElement => {
        // Détecte le langage depuis la classe ou utilise 'javascript' par défaut
        let language = 'javascript'

        // Recherche des classes comme 'language-javascript', 'language-css', etc.
        const languageClass = Array.from(codeElement.classList).find(
          className => className.startsWith('language-'),
        )

        if (languageClass) {
          language = languageClass.replace('language-', '')
        } else {
          // S'il n'y a pas de classe de langage, on l'ajoute
          codeElement.classList.add(`language-${language}`)
        }

        // Vérifie que le langage est supporté par Prism
        if (Prism.languages[language]) {
          const code = codeElement.textContent || ''
          codeElement.innerHTML = Prism.highlight(
            code,
            Prism.languages[language],
            language,
          )
        }

        // Ajoute une classe pour les styles personnalisés
        const parentPre = codeElement.parentElement
        if (parentPre && parentPre.tagName === 'PRE') {
          parentPre.classList.add('syntax-highlighted', 'prism-code')
        }
      })

      // Retourne le HTML modifié
      return tempDiv.innerHTML
    },
  },
})
</script>

<style>
/* Importation des styles Prism pour la coloration syntaxique */
@import 'prismjs/themes/prism-tomorrow.css';

/* Les styles de base sont maintenant gérés par @tailwindcss/typography */
/* Nous n'avons besoin que de quelques ajustements */

body {
  line-height: 1.9 !important;
}

/* Assurer une taille de fonte confortable */
.prose {
  font-size: 1.05rem;
}

/* Style spécifique pour notre article */
.article-content {
  --tw-prose-headings: theme('colors.gray.900');
  --tw-prose-invert-headings: white;
}

/* Corriger les espaces entre les paragraphes pour plus de lisibilité */
.prose p + p {
  margin-top: 1.25em;
}

/* S'assurer que les images sont responsives */
.prose img {
  max-width: 100%;
  height: auto;
}

/* Assurer la lisibilité du code inline sur les thèmes sombres */
.dark .prose code:not(pre code) {
  color: #4dffb5;
  background-color: rgba(15, 23, 42, 0.8);
  /* fond plus contrasté pour le code */
  font-weight: 600;
}

/* Transition douce pour les liens */
.prose a {
  transition: all 0.2s ease;
}

/* Amélioration de la lisibilité en mode sombre */
.dark .prose {
  color: #e2e8f0 !important;
  /* text-gray-200, override important pour s'assurer de la visibilité */
}

.dark .prose p,
.dark .prose ul,
.dark .prose ol,
.dark .prose li {
  color: #e2e8f0 !important;
  /* s'assurer que tous les éléments de texte sont suffisamment clairs */
}

.dark .prose strong {
  color: white !important;
}

/* Styles spécifiques pour les titres en mode dark - Force l'application des couleurs */
.dark .prose h1,
.dark .prose h2,
.dark .prose h3,
.dark .prose h4 {
  color: white !important;
  /* Blanc pur pour un contraste maximal */
}

.dark .prose h1 {
  font-size: 2rem !important;
  margin-top: 2rem !important;
  margin-bottom: 1rem !important;
  font-weight: 700 !important;
}

.dark .prose h2 {
  font-size: 1.5rem !important;
  margin-top: 1.75rem !important;
  margin-bottom: 0.75rem !important;
  font-weight: 700 !important;
}

.dark .prose h3 {
  font-size: 1.25rem !important;
  margin-top: 1.5rem !important;
  margin-bottom: 0.5rem !important;
  font-weight: 600 !important;
  color: #f3f4f6 !important;
  /* Légèrement moins blanc que les h1/h2 */
}

.dark .prose h4 {
  font-size: 1.125rem !important;
  margin-top: 1.25rem !important;
  margin-bottom: 0.5rem !important;
  font-weight: 600 !important;
  color: #f3f4f6 !important;
  /* Légèrement moins blanc que les h1/h2 */
}

/* Améliorer les contrastes pour les blockquotes en mode sombre */
.dark .prose blockquote {
  background-color: rgba(15, 23, 42, 0.5);
  border-left-color: #4dffb5 !important;
  padding: 0.75rem 1rem;
  color: #e2e8f0 !important;
}

/* Styles pour les blocs de code avec coloration syntaxique */
.prose pre {
  background-color: #1e293b !important;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  overflow: auto;
  padding: 1rem;
}

.prose pre.prism-code {
  background-color: #1f2937 !important;
  border: 1px solid #374151;
}

.prose pre code {
  font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
    monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  padding: 0;
  background-color: transparent !important;
  color: #e2e8f0 !important;
  border-radius: 0;
  border: none;
}

/* Scrollbars personnalisées pour les blocs de code */
.prose pre::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.prose pre::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

.prose pre::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.prose pre {
  scrollbar-width: thin;
  scrollbar-color: #4b5563 transparent;
}
</style>
