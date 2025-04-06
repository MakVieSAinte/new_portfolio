<template>
  <div>
    <!-- Articles -->
    <div class="my-10 sm:my-14">
      <h1 class="mb-2 text-3xl font-medium text-primary font-familjen_grotesk">
        Articles
      </h1>

      <!-- List -->
      <ul class="space-y-10">
        <li>
          <p class="mb-2 text-sm text-gray-500 dark:text-neutral-300">
            Il y 4 jours
          </p>
          <h5 class="font-medium text-md text-gray-800 dark:text-neutral-100">
            The complete guide to OKRs
          </h5>
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-300">
            How to make objectives and key results work for your company.
          </p>
          <p class="mt-1">
            <a class="text-sm text-primary underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-primary dark:hover:secondary"
              href="#">
              Continue reading
            </a>
          </p>
        </li>

        <li>
          <p class="mb-2 text-sm text-gray-500 dark:text-neutral-300">
            2024
          </p>
          <h5 class="font-medium text-md text-gray-800 dark:text-neutral-100">
            Enhancement in Customer Engagement
          </h5>
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-300">
            With the aim of optimizing customer interactions and boosting
            brand loyalty, the team at Preline leveraged Mailchimp's
            powerful tools and expertise to deliver exceptional results.
          </p>
          <p class="mt-1">
            <a class="text-sm text-primary underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-primary dark:hover:secondary"
              href="#">
              Continue reading
            </a>
          </p>
        </li>

        <li>
          <p class="mb-2 text-sm text-gray-500 dark:text-neutral-300">
            2023
          </p>
          <h5 class="font-medium text-md text-gray-800 dark:text-neutral-100">
            How Google Assistant now helps you record stories for kids
          </h5>
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-300">
            Google is constantly updating its consumer AI, Google
            Assistant, with new features.
          </p>
          <p class="mt-1">
            <a class="text-sm text-primary underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-primary dark:hover:secondary"
              href="#">
              Continue reading
            </a>
          </p>
        </li>
      </ul>
      <!-- End List -->
    </div>
    <!-- End Articles -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: "ArticleComponent",

  data() {
    return {

    }
  },

  methods: {

  },

  mounted() {

  }
});
</script>

<style scoped></style>
