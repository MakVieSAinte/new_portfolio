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
          <ProjectCard
            v-for="project in limitedProjects"
            :key="project.id"
            :title="project.title"
            :image-src="project.imageSrc"
            :video-src="project.videoSrc"
            :url="project.url"
            :description="project.description"
            :technologies="project.technologies"
            @openModal="openModal(project)"
          />
        </div>
        <!-- End Grid -->

        <!-- View All Projects Button -->
        <div class="text-center mt-8">
          <router-link
            to="/projects"
            class="inline-flex justify-center items-center gap-x-2 text-center dark:text-white dark:hover:text-gray-300 text-gray-800 hover:text-gray-950 text-sm font-medium rounded-full focus:outline-none py-3 px-6 duration-300 transition-all"
          >
            {{ texts?.projects?.viewAllButton }}
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </router-link>
        </div>
      </div>
      <!-- End Card Blog -->
    </div>

    <!-- Project Modal -->
    <ProjectModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useI18n } from '../../composables'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from '../project/ProjectModal.vue'
import type { Project } from '@/types/project'
import { projects as projectsList } from '../../data/projects'

export default defineComponent({
  name: 'ProjectsComponent',

  components: {
    ProjectCard,
    ProjectModal,
  },

  setup() {
    const { texts, locale } = useI18n('home')
    const projects = ref<Project[]>(projectsList)
    const isModalOpen = ref(false)
    const selectedProject = ref<Project>(projectsList[0])

    // Compute only first 6 projects
    const limitedProjects = computed(() => projects.value.slice(0, 6))

    const openModal = (project: Project) => {
      selectedProject.value = project
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    return {
      texts,
      locale,
      limitedProjects,
      isModalOpen,
      selectedProject,
      openModal,
      closeModal,
    }
  },
})
</script>

<style scoped></style>
