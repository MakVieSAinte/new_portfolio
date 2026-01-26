<template>
  <div>
    <!-- FAQ -->
    <div class="my-10 sm:my-14">
      <h1 class="mb-1 text-3xl font-medium text-primary font-familjen_grotesk">
        {{ texts?.faq?.title }}
      </h1>
      <p class="text-md font-light text-gray-800 dark:text-neutral-400">
        {{ texts?.faq?.intro }}
      </p>

      <nav
        class="flex justify-between gap-x-1 mt-8 mb-5"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <!-- bg-white border border-transparent

  dark:bg-neutral-800 dark:border-transparent -->
        <button
          type="button"
          :class="[
            'py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:pointer-events-none',
            activeTab === 1
              ? 'bg-slate-100/50 dark:bg-neutral-800 text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white'
              : 'bg-transparent text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-300',
          ]"
          @click="activeTab = 1"
          id="equal-width-elements-item-1"
          :aria-selected="activeTab === 1"
          aria-controls="equal-width-elements-1"
          role="tab"
        >
          {{ texts?.faq?.tabs?.services }}
        </button>
        <button
          type="button"
          :class="[
            'py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:pointer-events-none',
            activeTab === 2
              ? 'bg-slate-100/50 dark:bg-neutral-800 text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white'
              : 'bg-transparent text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-300',
          ]"
          @click="activeTab = 2"
          id="equal-width-elements-item-2"
          :aria-selected="activeTab === 2"
          aria-controls="equal-width-elements-2"
          role="tab"
        >
          {{ texts?.faq?.tabs?.pricing }}
        </button>
        <button
          type="button"
          :class="[
            'py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:pointer-events-none',
            activeTab === 3
              ? 'bg-slate-100/50 dark:bg-neutral-800 text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white'
              : 'bg-transparent text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-300',
          ]"
          @click="activeTab = 3"
          id="equal-width-elements-item-3"
          :aria-selected="activeTab === 3"
          aria-controls="equal-width-elements-3"
          role="tab"
        >
          {{ texts?.faq?.tabs?.about }}
        </button>
      </nav>

      <div class="mt-3">
        <div
          id="equal-width-elements-1"
          :class="{ hidden: activeTab !== 1 }"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-1"
        >
          <div class="hs-accordion-group flex flex-col gap-3">
            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-two"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-slate-100 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-two"
              >
                {{ texts?.faq?.qns?.typesProjects?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-two"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.typesProjects?.a }}
                    <em>{{ texts?.faq?.qns?.typesProjects?.a2 }}</em>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-one"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-one"
              >
                {{ texts?.faq?.qns?.technologies?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-one"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-one"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.technologies?.a }}
                    <em>{{ texts?.faq?.qns?.technologies?.a2 }}</em>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-three"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-three"
              >
                {{ texts?.faq?.qns?.process?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-three"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.process?.a }}
                    <em>{{ texts?.faq?.qns?.process?.a2 }}</em>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-four"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-four"
              >
                {{ texts?.faq?.qns?.testsBeforeDelivery?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-three"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.testsBeforeDelivery?.a }}
                    <em>{{ texts?.faq?.qns?.testsBeforeDelivery?.a2 }}</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="equal-width-elements-2"
          :class="{ hidden: activeTab !== 2 }"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-2"
        >
          <div class="hs-accordion-group flex flex-col gap-3">
            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-two"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-slate-100 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-two"
              >
                {{ texts?.faq?.qns?.priceFix?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-two"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.priceFix?.a }}
                    <em>{{ texts?.faq?.qns?.priceFix?.a2 }}</em>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-one"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-one"
              >
                {{ texts?.faq?.qns?.hourlyOrFixed?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-one"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-one"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    <em>{{ texts?.faq?.qns?.hourlyOrFixed?.a }}</em>
                    {{ texts?.faq?.qns?.hourlyOrFixed?.a2 }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-three"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-three"
              >
                {{ texts?.faq?.qns?.deadlines?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-three"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.deadlines?.a
                    }}<em> {{ texts?.faq?.qns?.deadlines?.a2 }}</em
                    >,
                    {{ texts?.faq?.qns?.deadlines?.a3 }}
                    <em>{{ texts?.faq?.qns?.deadlines?.a4 }}</em>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-four"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-four"
              >
                {{ texts?.faq?.qns?.delays?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-three"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.typesProjects?.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="equal-width-elements-3"
          :class="{ hidden: activeTab !== 3 }"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-2"
        >
          <div class="hs-accordion-group flex flex-col gap-3">
            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-one"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-slate-100 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-one"
              >
                {{ texts?.faq?.qns?.whoAreYou?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-two"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    <em>{{ texts?.faq?.qns?.whoAreYou?.a }}</em>
                    {{ texts?.faq?.qns?.whoAreYou?.a2 }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-one"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-one"
              >
                {{ texts?.faq?.qns?.frontOrBack?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-one"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-one"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.frontOrBack?.a }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-three"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-three"
              >
                {{ texts?.faq?.qns?.hobbies?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-three"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.hobbies?.a }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion hs-accordion-active:border-gray-200 bg-slate-100/50 border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-four"
            >
              <button
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-900 py-4 px-5 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-white dark:hover:text-neutral-400 dark:focus:outline-hidden dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-four"
              >
                {{ texts?.faq?.qns?.skillToDevelop?.q }}
                <svg
                  class="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  class="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-three"
              >
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-neutral-400 leading-snug">
                    {{ texts?.faq?.qns?.skillToDevelop?.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- End FAQ -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '../../composables'
import 'preline'

declare global {
  interface Window {
    HSStaticMethods: any
  }
}

export default defineComponent({
  name: 'FAQComponent',

  data() {
    return {
      activeTab: 1,
      accordion1: true,
      accordion2: false,
      accordion3: false,
    }
  },

  methods: {},

  mounted() {
    window.HSStaticMethods.autoInit()
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

<style scoped></style>
