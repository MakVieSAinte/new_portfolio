<template>
  <div class="space-y-12">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="flex justify-center items-center py-12">
      <div class="relative">
        <div
          class="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center"></div>
      </div>
      <span class="ml-4 text-gray-600 dark:text-gray-300">{{
        texts?.pageLabs?.loading
      }}</span>
    </div>

    <!-- No Projects Found -->
    <p
      v-else-if="!isLoading && projects.length === 0"
      class="text-center text-gray-500 dark:text-gray-400 py-12"
    >
      {{ texts?.pageLabs?.notProject }}
    </p>

    <!-- Projects List -->
    <CodePlayground
      v-else
      v-for="(project, index) in projects"
      :key="index"
      :html="project.html"
      :css="project.css"
      :js="project.js"
      :meta="project.meta"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { supabase } from './supabase'
import CodePlayground from './CodePlayground.vue'
import { useI18n } from '../../composables'

export default defineComponent({
  name: 'AllProjects',
  components: { CodePlayground },

  data() {
    return {
      projects: [] as Array<{
        html: string
        css: string
        js: string
        meta: any
      }>,
      isLoading: true,
    }
  },

  async mounted() {
    try {
      const folderNames = ['1', '2', '3', '4', '5'] // ← Tes vrais dossiers

      const allProjects = await Promise.all(
        folderNames.map(async folder => {
          const [html, css, js, metaRaw] = await Promise.all([
            this.getFile(`projets/${folder}/index.html`),
            this.getFile(`projets/${folder}/style.css`),
            this.getFile(`projets/${folder}/script.js`),
            this.getFile(`projets/${folder}/meta.json`),
          ])

          let meta = {}
          try {
            meta = JSON.parse(metaRaw)
          } catch (e) {
            console.warn(`meta.json invalide ou manquant pour ${folder}`, e)
          }

          return { html, css, js, meta }
        }),
      )

      this.projects = allProjects.filter(
        project => project.html || project.css || project.js, // Ne garde que les projets qui ont au moins un fichier
      )
    } catch (error) {
      console.error('Erreur lors du chargement des projets:', error)
    } finally {
      this.isLoading = false
    }
  },

  methods: {
    async getFile(path: string): Promise<string> {
      const { data, error } = await supabase.storage
        .from('portfolio')
        .download(path)

      if (error) {
        console.warn(`Fichier manquant : ${path}`, error.message)
        return ''
      }

      return await data.text()
    },
  },

  setup() {
    const { texts, locale } = useI18n('home')

    return {
      texts,
      locale,
    }
  },
})
</script>
