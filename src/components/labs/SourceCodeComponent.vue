<template>
  <div class="space-y-12">
    <p v-if="projects.length === 0" class="text-center text-gray-500">
      Aucun projet trouvé
    </p>
    <CodePlayground
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
    }
  },

  async mounted() {
    const folderNames = ['1', '2', 'fre'] // ← Tes vrais dossiers

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

    this.projects = allProjects
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
})
</script>
