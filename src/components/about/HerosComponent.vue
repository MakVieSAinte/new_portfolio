<template>
  <section class="w-full max-w-5xl mx-auto px-4 py-12">
    <!-- Titre + intro + photo à gauche -->
    <div class="flex flex-col md:flex-row md:items-center gap-8">
      <!-- Photo à gauche -->
      <div
        class="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto"
      >
        <div
          class="border border-gray-300 dark:border-neutral-800 rounded-[12px] p-[4px] bg-white dark:bg-neutral-900 shadow-lg"
        >
          <img
            class="w-40 h-40 md:w-56 md:h-56 rounded-[10px] object-cover object-center"
            src="@/assets/images/profil.jpg"
            alt="Avatar"
          />
        </div>
      </div>
      <!-- Texte à droite -->
      <div class="flex-1">
        <h1
          class="text-5xl font-medium text-gray-800 dark:text-neutral-200 font-familjen_grotesk mb-4"
        >
          About Me
        </h1>
        <p
          class="text-lg text-gray-800 dark:text-neutral-400 font-light mb-8 max-w-2xl"
        >
          Learn more about my journey as a Front-End Developer, my design
          philosophy, and my passion for crafting intuitive digital experiences.
        </p>
      </div>
    </div>

    <!-- Présentation -->
    <div class="mt-12">
      <p
        class="text-base md:text-lg text-gray-800 dark:text-neutral-200 font-light mb-6"
      >
        Hi, I'm <span class="font-semibold">Emma Thompson</span>, a UX/UI
        Designer and Front-End Developer based right here in Boston. For the
        past six years, I've been immersed in the world of digital product
        creation, focusing on building experiences that are not just functional,
        but genuinely intuitive and engaging for users. My path started at
        <span class="font-semibold">Boston University</span>, where I earned a
        degree in Interactive Design. It was there I discovered my dual passion
        for the visual language of design and the logical puzzle of code. Since
        then, I've honed my skills in both areas, believing that the best
        digital products are born from a deep understanding of both aesthetics
        and implementation.
      </p>
      <h2
        class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-neutral-200 mb-2 mt-8"
      >
        My Design Philosophy
      </h2>
      <p
        class="text-base md:text-lg text-gray-800 dark:text-neutral-200 font-light mb-6"
      >
        My design philosophy is rooted in
        <span class="font-semibold">empathy</span> and
        <span class="font-semibold">problem-solving</span>. I believe great
        design starts with understanding the 'why' – the user's needs,
        motivations, and pain points. I use research, iterative prototyping
        (often with tools like Figma), and user testing to ensure the solutions
        I build are truly effective. I strive to create interfaces that feel
        effortless, where functionality and beauty work hand-in-hand. Whether
        I'm crafting pixel-perfect UIs or writing clean Vue.js/Nuxt.js code, my
        focus is always on creating value for the end-user.
      </p>
      <h2
        class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-neutral-200 mb-2 mt-8"
      >
        What Drives Me
      </h2>
      <p
        class="text-base md:text-lg text-gray-800 dark:text-neutral-200 font-light"
      >
        What keeps me excited about this work is the constant learning and the
        challenge of translating complex ideas into simple, elegant solutions.
        There's nothing more rewarding than seeing a design come to life and
        knowing it's making someone's digital interaction easier or more
        enjoyable.
      </p>
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
