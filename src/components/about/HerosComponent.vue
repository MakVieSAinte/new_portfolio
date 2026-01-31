<template>
  <section class="w-full mx-auto !px-0 py-6">
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Photo -->
      <div class="flex-shrink-0 flex w-full md:w-auto md:rotate-[-6deg] !rotate-0">
        <div :class="[isLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-4xl scale-150 opacity-0']"
          class="border border-gray-300 dark:border-neutral-800 rounded-[12px] p-[4px] bg-white dark:bg-neutral-900 shadow-lg overflow-hidden">
          <img
            class="!w-[175px] !h-[175px] md:!w-[148px] md:!h-[148px] rounded-[10px] object-cover object-center transition-all duration-1000"
            :class="[isLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-4xl scale-150 opacity-0']"
            src="/public/images/others/profil.jpg" alt="Avatar" />
        </div>
      </div>

      <!-- Texte -->
      <div class="flex-1">
        <h1 class="text-5xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk mb-5">
          {{ texts?.pageAbout?.title }}
        </h1>

        <!-- Paragraphe 1 -->
        <p class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl">
          {{ texts?.pageAbout?.intro?.prefix }}
          <span class="font-semibold text-gray-800 dark:text-neutral-200">
            MakVieSAinte
          </span>
          {{ texts?.pageAbout?.intro?.afterName }}
          <span class="font-semibold">
            {{ texts?.pageAbout?.intro?.highlight_applications }}
          </span>
          {{ texts?.pageAbout?.intro?.suffix }}
        </p>

        <!-- Achievement Paragraph -->
        <p class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl">
          {{ texts?.pageAbout?.achievement?.prefix }}
          <a :href="texts?.pageAbout?.achievement?.osiane_url" target="_blank" rel="noopener noreferrer"
            class="font-normal text-gray-800 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors decoration-2 underline">
            {{ texts?.pageAbout?.achievement?.osiane }}
          </a>
          {{ texts?.pageAbout?.achievement?.challenge }}
          <a :href="texts?.pageAbout?.achievement?.kokamba_url" target="_blank" rel="noopener noreferrer"
            class="font-normal text-gray-800 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors decoration-2 underline">
            {{ texts?.pageAbout?.achievement?.kokamba }}
          </a>
          {{ texts?.pageAbout?.achievement?.suffix }}
        </p>

        <!-- Paragraphe 2 -->
        <p class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl">
          {{ texts?.pageAbout?.section2?.prefix }}
          <span class="font-semibold">
            {{ texts?.pageAbout?.section2?.highlight_reputation }}
          </span>
          {{ texts?.pageAbout?.section2?.suffix }}
        </p>

        <!-- Paragraphe 3 -->
        <p class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl">
          {{ texts?.pageAbout?.section3?.prefix }}
          <span class="font-semibold">
            {{ texts?.pageAbout?.section3?.highlight_status }}
          </span>
          {{ texts?.pageAbout?.section3?.mid }}
          <span class="font-semibold">
            {{ texts?.pageAbout?.section3?.highlight_specialty }}
          </span>
          {{ texts?.pageAbout?.section3?.suffix }}
        </p>

        <!-- Badges Committers & Wakatime -->
        <div class="flex flex-wrap gap-3 mt-10">
          <!-- Committers Top Badge -->
          <a href="https://user-badge.committers.top/congo_brazzaville/MakVieSAinte" target="_blank"
            rel="noopener noreferrer" title="Top Committers Badge" class="hover:opacity-80 transition-opacity">
            <img src="https://user-badge.committers.top/congo_brazzaville_public/MakVieSAinte.svg"
              alt="committers.top badge" class="h-auto" />
          </a>

          <!-- Wakatime Badge -->
          <a href="https://wakatime.com/@b2ac3fad-13f4-43d8-8744-9e52d15163fe" target="_blank" rel="noopener noreferrer"
            title="Wakatime Profile" class="hover:opacity-80 transition-opacity">
            <img src="https://wakatime.com/badge/user/b2ac3fad-13f4-43d8-8744-9e52d15163fe.svg" alt="wakatime"
              class="h-auto" />
          </a>

          <!-- Rank Badge -->
          <img src="https://img.shields.io/badge/Dev-Rank%20A+-brightgreen" alt="Rank A+" class="h-auto" />

          <!-- Hire Badge -->
          <img src="https://img.shields.io/badge/Available%20for-Hire-success" alt="Available for Hire"
            class="h-auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '../../composables'

export default defineComponent({
  name: 'HerosComponent',
  data() {
    return {
      isLoaded: false
    }
  },

  setup() {
    const { texts, locale } = useI18n('home')

    return {
      texts,
      locale,
    }
  },
  mounted() {
    // Déclencher l'effet de révélation même si l'image est déjà en cache
    setTimeout(() => {
      this.isLoaded = true
    }, 50)
  },
})
</script>

<style scoped>
.pulse {
  animation: pulse-animation 0.95s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(77, 255, 181);
  }

  100% {
    box-shadow: 0 0 0 4px rgb(77, 255, 181, 0);
  }
}
</style>
