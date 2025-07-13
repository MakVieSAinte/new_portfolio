<template>
  <div class="w-full max-w-4xl mx-auto bg-slate-100/50 dark:bg-neutral-950 border border-slate-100/50 dark:border-neutral-800/90 rounded-md">
    <div class="flex space-x-2 px-1 pt-1 pb-0">
      <button v-for="tab in tabs" :key="tab" :class="[
        'px-1 pt-2 pb-3 focus:outline-none outline-none border-0 transition-all duration-300',
        activeTab === tab ? 'text-gray-800 dark:text-neutral-200 border-b-2 border-primary' : 'text-gray-800 dark:text-neutral-300'
      ]" @click="activeTab = tab">
      <span :class="[
        'py-[5px] px-3 text-xs font-medium rounded-md focus:outline-none hover:bg-neutral-800',
      ]">
        {{ tab }}  
      </span>
      </button>
    </div>

    <div v-if="activeTab !== 'Preview'" class="relative">
      <button class="absolute top-2 right-2 text-white bg-gray-900 hover:bg-gray-600 px-2 py-1 text-xs rounded"
        @click="copyToClipboard(code[activeTab.toLowerCase()])">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-icon lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
      </button>
      <pre class="bg-slate-100/50 dark:bg-neutral-800/30 text-white rounded p-4 overflow-auto text-sm h-72">
        <code :class="'language-' + activeTab.toLowerCase()" v-html="highlightedCode" />
      </pre>
    </div>

    <div v-else class="border rounded-md overflow-hidden h-64">
      <iframe :srcdoc="previewContent" class="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin"></iframe>
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

</style>
