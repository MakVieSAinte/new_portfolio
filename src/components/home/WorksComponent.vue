<template>
  <div>
    <!-- Work Experience -->
    <div class="mt-10 sm:mt-14">
      <h1 class="mb-2 text-3xl font-medium text-primary font-familjen_grotesk">
        {{ texts?.works?.title }}
      </h1>
      <p class="text-md font-light text-gray-800 dark:text-neutral-400">
        {{ texts?.works?.intro }}
      </p>

      <!-- Timeline. -->
      <div>
        <!-- Item -->
        <div class="group relative flex gap-x-5 mt-8">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-8 flex justify-center items-center">
              <img src="/public/images/others/ayokai-logo.webp" class="shrink-0 text-gray-700 dark:text-slate-200"
                height="62px" />
            </div>
          </div>
          <!-- End Icon -->

          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-700 dark:text-slate-200">
              {{ texts?.works?.ayokai?.date }}
            </h3>

            <p class="font-semibold text-sm text-gray-800 dark:text-white">
              {{ texts?.works?.ayokai?.role }}
            </p>

            <p class="mt-1 text-sm text-gray-700 dark:text-slate-200">
              {{ texts?.works?.ayokai?.description }}
            </p>

            <ul class="list-disc ms-6 mt-3 space-y-1.5">
              <li class="ps-1 text-sm text-gray-700 dark:text-slate-200">
                {{ texts?.works?.ayokai?.bullets?.[0] }}
              </li>
              <li class="ps-1 text-sm text-gray-700 dark:text-slate-200">
                {{ texts?.works?.ayokai?.bullets?.[1] }}
              </li>
              <li class="ps-1 text-sm text-gray-700 dark:text-slate-200">
                {{ texts?.works?.ayokai?.bullets?.[2] }}
              </li>
              <li class="ps-1 text-sm text-gray-700 dark:text-slate-200">
                {{ texts?.works?.ayokai?.bullets?.[3] }}
              </li>
            </ul>
            <!-- Section QA chez Ayokai -->
            <div class="mt-3 p-4 rounded-lg">
              <h4 class="font-semibold text-sm text-gray-800 dark:text-white mb-1">
                {{ texts?.works?.ayokai?.qa?.title }}
              </h4>
              <p class="text-sm text-gray-700 dark:text-slate-200">
                {{ texts?.works?.ayokai?.qa?.description }}
              </p>
            </div>
            <div class="mt-3">
              <!-- Card -->
              <a class="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-800"
                href="https://ayokai.com/" target="_blank">
                <div class="relative flex items-center overflow-hidden">
                  <img class="hidden sm:block w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                    src="/public/images/others/ayokai.png" alt="Blog Image" />

                  <div class="grow p-4 sm:ms-48 ms-0">
                    <div class="min-h-24 flex flex-col justify-center">
                      <h3 class="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                        {{ texts?.works?.ayokai?.card?.title }}
                      </h3>
                      <p class="mt-1 font-normal text-sm text-gray-500 dark:text-neutral-400">
                        {{ texts?.works?.ayokai?.card?.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <!-- End Card -->
            </div>
          </div>
          <!-- End Right Content -->
        </div>
        <!-- End Item -->

        <!-- Item -->
        <div class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-12 flex justify-center items-center">
              <img src="/public/images/others/possacode-removebg-preview.png"
                class="shrink-0 text-gray-700 dark:text-slate-200" height="262px" />
            </div>
          </div>
          <!-- End Icon -->

          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-700 dark:text-slate-200">
              {{ texts?.works?.possacode?.date }}
            </h3>
            <p class="font-semibold text-sm text-gray-800 dark:text-white mt-6">
              {{ texts?.works?.possacode?.role }}
            </p>

            <p class="mt-1 text-sm text-gray-700 dark:text-slate-200">
              {{ texts?.works?.possacode?.description }}
            </p>

            <ul class="list-disc ms-6 mt-3 space-y-1.5">
              <li class="ps-1 text-sm text-gray-700 dark:text-slate-200">
                Participation à une communauté tech solidaire et engagée, axée
                sur le partage ouvert des connaissances.
              </li>
              <li class="ps-1 text-sm text-gray-700 dark:text-slate-200">
                Participation à des initiatives open-source et à des ateliers de
                groupe, avec mentorat entre pairs.
              </li>
            </ul>

            <!-- Section Lead -->
            <div class="mt-5 p-2 rounded-lg">
              <h4 class="font-semibold text-sm text-gray-800 dark:text-white mb-1">
                {{ texts?.works?.possacode?.lead?.title }}
                <span class="mb-1 text-xs font-light text-gray-700 dark:text-slate-200">
                  {{ texts?.works?.possacode?.lead?.date }}
                </span>
              </h4>
              <p class="text-sm text-gray-700 dark:text-slate-200">
                {{ texts?.works?.possacode?.lead?.description }}
              </p>
            </div>
          </div>
          <!-- End Right Content -->
        </div>
        <!-- End Item -->

        <!-- Item -->
        <div class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-6 flex justify-center items-center">
              <svg class="shrink-0 size-6 text-gray-800 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>
          </div>
          <!-- End Icon -->

          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-700 dark:text-slate-200">
              {{ texts?.works?.freelance?.date }}
            </h3>

            <p class="font-semibold text-sm text-gray-800 dark:text-white">
              {{ texts?.works?.freelance?.role }}
            </p>

            <p class="mt-1 text-sm text-gray-700 dark:text-slate-200">
              {{ texts?.works?.freelance?.description }}
            </p>
          </div>
          <!-- End Right Content -->
        </div>
        <!-- End Item -->
      </div>
      <!-- End Timeline -->
    </div>
    <!-- End Work Experience -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '../../composables'

export default defineComponent({
  name: 'WorkComponent',

  data() {
    return {}
  },

  methods: {},

  mounted() { },

  setup() {
    const { texts, locale } = useI18n('home')

    return {
      texts,
      locale,
    }
  },
})
</script>

<style scoped></style>
