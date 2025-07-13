<template>
  <div class="w-full max-w-4xl mx-auto">
    <div class="flex space-x-2 mb-4 border-b border-gray-300">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[
          'px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none',
          activeTab === tab ? 'bg-white text-black border-t border-l border-r border-gray-300' : 'bg-gray-100 text-gray-500'
        ]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div v-if="activeTab !== 'Preview'" class="relative">
      <button
        class="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-600 px-2 py-1 text-xs rounded"
        @click="copyToClipboard(code[activeTab.toLowerCase()])"
      >
        📋 Copier
      </button>
      <pre class="bg-gray-900 text-white rounded p-4 overflow-auto text-sm h-96">
        <code :class="'language-' + activeTab.toLowerCase()" v-html="highlightedCode" />
      </pre>
    </div>

    <div v-else class="border rounded-md overflow-hidden h-96">
      <iframe
        :srcdoc="previewContent"
        class="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
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
    html: {
      type: String,
      required: false,
      default: ''
    },
    css: {
      type: String,
      required: false,
      default: ''
    },
    js: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    const baseTabs = ['Preview']
    const tabs = []
    if (this.html) tabs.push('HTML')
    if (this.css) tabs.push('CSS')
    if (this.js) tabs.push('JS')
    tabs.push(...baseTabs)

    return {
      tabs,
      activeTab: tabs[0] || 'Preview'
    }
  },

  computed: {
    code(): Record<string, string> {
      return {
        html: this.html,
        css: this.css,
        js: this.js
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
    }
  },

  methods: {
    copyToClipboard(content: string) {
      navigator.clipboard.writeText(content)
        .then(() => console.log('Code copied!'))
        .catch(err => console.error('Copy failed', err))
    }
  }
})
</script>

<style scoped>
@import 'prismjs/themes/prism-tomorrow.css';

button {
  transition: all 0.2s;
}
button:hover {
  background-color: #e5e7eb;
}
</style>
