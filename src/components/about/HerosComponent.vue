<template>
  <section class="w-full mx-auto !px-0 py-6">
    <!-- Titre + intro + photo à gauche -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Photo à gauche -->
      <div class="flex-shrink-0 flex w-full md:w-auto md:rotate-[-6deg] !rotate-0">
        <div
          class="border border-gray-300 dark:border-neutral-800 rounded-[12px] p-[4px] bg-white dark:bg-neutral-900 shadow-lg">
          <img class="!w-[175px] !h-[175px] md:!w-[148px] md:!h-[148px] rounded-[10px] object-cover object-center"
            src="@/assets/images/profil.jpg" alt="Avatar" />
        </div>
      </div>

      <!-- Texte à droite -->
      <div class="flex-1">
        <h1 class="text-5xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk mb-5">
          About Me
        </h1>
        <p class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl">
          Hi, je suis <span class="font-semibold text-gray-800 dark:text-neutral-200">MakVieSAinte</span>, Software
          Developer et Web Designer basé à Brazzaville.
          Je conçois et développe des <span class="font-semibold">applications web modernes</span> en utilisant
          JavaScript, React, Vue.js et Node.js, avec un souci constant de performance et d’expérience utilisateur.
        </p>

        <p class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl">
          Qu’il s’agisse de collaborer avec des équipes ou de diriger des projets de conception, mon sens du détail et
          mon engagement envers l’excellence m’ont permis de bâtir une <span class="font-semibold">réputation
            fondée</span> sur la qualité et la fiabilité.
        </p>

        <p class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl">
          Actuellement <span class="font-semibold">étudiant en 3ᵉ année d’informatique</span> à l’Institut IEPA de
          Brazzaville, spécialité <span class="font-semibold">analyse et programmation</span>, je me prépare à obtenir
          mon diplôme et à entamer la prochaine étape de mon parcours professionnel.
        </p>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HerosComponent',
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
