<template>
  <div>
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-2 py-0 sm:px-4 lg:px-0 lg:py-4 mx-auto">
      <!-- Grid -->
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <ProjectCard v-for="project in projects" :key="project.id" :title="project.title" :image-src="project.imageSrc"
          :video-src="project.videoSrc" :url="project.url" :description="project.description"
          :technologies="project.technologies" />
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ProjectCard from '../home/ProjectCard.vue'
import { projects as projectsList } from '../../data/projects'
import type { Project } from '../../types/project'

export default defineComponent({
  name: 'MyProjectsComponent',

  components: {
    ProjectCard,
  },

  setup() {
    // Utiliser les données du fichier TypeScript
    const projects = ref<Project[]>(projectsList)

    return {
      projects
    }
  }
})
</script>

<style scoped></style>
