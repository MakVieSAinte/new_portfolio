<template>
  <div>
    <!-- Projects -->
    <div class="mt-10 sm:mt-12">
      <h1 class="mb-1 text-3xl font-medium text-primary font-familjen_grotesk">
        {{ texts?.projects?.title }}
      </h1>
      <p class="text-md font-light text-gray-800 dark:text-neutral-400">
        {{ texts?.projects?.description }}
      </p>

      <!-- Card Blog -->
      <div class="max-w-[85rem] px-2 py-4 sm:px-4 lg:px-0 lg:py-6 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <ProjectCard v-for="project in projects" :key="project.id" :title="project.title"
            :image-src="project.imageSrc" :video-src="project.videoSrc" :url="project.url"
            :description="project.description" :technologies="project.technologies"></ProjectCard>
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Blog -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from '../../composables'
import ProjectCard from './ProjectCard.vue'
import type { Project } from '../../types/project'
import { projects as projectsList } from '../../data/projects'

export default defineComponent({
  name: 'ProjectsComponent',

  components: {
    ProjectCard,
  },

  setup() {
    const { texts, locale } = useI18n('home')
    const projects = ref<Project[]>(projectsList)

    return {
      texts,
      locale,
      projects,
    }
  },
})
</script>

<style scoped></style>
