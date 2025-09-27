<template>
  <div>
    <h1
      v-if="meta.title"
      class="!mt-24 text-2xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk mb-2"
    >
      {{ meta.title }}
    </h1>
    <p
      v-if="meta.description"
      class="text-md font-light text-gray-800 dark:text-neutral-400 !p-0 !m-0"
    >
      {{ meta.description }}
    </p>

    <div
      class="group w-full max-w-4xl mx-auto !mt-4 bg-slate-100/50 dark:bg-neutral-950 border border-slate-100/50 dark:border-neutral-800/90 rounded-md"
    >
      <div class="flex space-x-2 px-1 pt-1 pb-0">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="[
            'px-1 pt-2 pb-3 focus:outline-none outline-none border-0 transition-all duration-300',
            activeTab === tab
              ? 'text-gray-800 dark:text-neutral-200 border-b-2 border-primary'
              : 'text-gray-800 dark:text-neutral-300',
          ]"
          @click="activeTab = tab"
        >
          <span
            class="py-[5px] px-3 text-xs font-medium rounded-md focus:outline-none hover:bg-neutral-800"
          >
            {{ tab }}
          </span>
        </button>
      </div>

      <div
        v-if="activeTab !== 'Preview' && activeTab !== 'Credits'"
        class="relative"
      >
        <button
          class="absolute top-2 right-4 text-neutral-500 bg-neutral-900 hover:bg-neutral-900/50 hover:text-neutral-400 px-2 py-2 text-xs rounded hidden group-hover:inline-block transition-all duration-600"
          @click="copyToClipboard(code[activeTab.toLowerCase()])"
          title="Copie le code"
        >
          <svg
            v-if="!copied"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path
              d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </button>
        <pre
          class="bg-slate-100/50 dark:bg-neutral-800/30 text-white rounded p-4 overflow-auto text-sm h-72"
        >
          <code :class="'language-' + activeTab.toLowerCase()" v-html="highlightedCode" />
        </pre>
      </div>

      <div
        v-else-if="activeTab === 'Preview'"
        class="border rounded-md overflow-hidden h-40"
      >
        <iframe
          :srcdoc="previewContent"
          class="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div
        v-else-if="activeTab === 'Credits' && meta.credits"
        class="p-4 text-sm text-gray-700 dark:text-neutral-300"
      >
        <p>{{ meta.credits }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'

export default defineComponent({
  name: 'CodePlayground',
  props: {
    html: { type: String, default: '' },
    css: { type: String, default: '' },
    js: { type: String, default: '' },
    meta: {
      type: Object as () => {
        title?: string
        description?: string
        technologies?: string[]
        credits?: string
      },
      required: true,
    },
  },

  data() {
    const baseTabs = []
    if (this.html) baseTabs.push('HTML')
    if (this.css) baseTabs.push('CSS')
    if (this.js) baseTabs.push('JS')
    baseTabs.push('Preview')
    if (this.meta?.credits?.trim()) baseTabs.push('Credits')

    return {
      tabs: baseTabs,
      activeTab: 'Preview',
      copied: false,
    }
  },

  computed: {
    code(): Record<string, string> {
      return {
        html: this.html,
        css: this.css,
        js: this.js,
      }
    },

    previewContent(): string {
      const bodyMatch = this.html.match(/<body>([\s\S]*)<\/body>/)
      const bodyContent = bodyMatch ? bodyMatch[1] : this.html

      return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${this.css}</style>
</head>
<body>
  ${bodyContent}
  <script>${this.js}<\/script>
</body>
</html>`
    },

    highlightedCode(): string {
      const lang = this.activeTab.toLowerCase()
      const raw = this.code[lang] || ''
      return Prism.highlight(raw, Prism.languages[lang] || '', lang)
    },
  },

  methods: {
    copyToClipboard(content: string) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          this.copied = true
          setTimeout(() => {
            this.copied = false
          }, 2000)
        })
        .catch(err => console.error('Copy failed', err))
    },
  },
})
</script>

<style scoped>
@import 'prismjs/themes/prism-tomorrow.css';

pre::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
pre::-webkit-scrollbar-thumb {
  background: #404040;
  border-radius: 4px;
}
pre::-webkit-scrollbar-track {
  background: transparent !important;
  border-radius: 2px;
}
pre {
  scrollbar-width: thin;
  scrollbar-color: #404040 transparent;
}
</style>
