<template>
  <div>
    <!-- FAQ -->
    <div class="my-10 sm:my-14">
      <h1 class="mb-1 text-3xl font-medium text-primary font-familjen_grotesk">
        Questions fréquentes
      </h1>
      <p class="text-md font-light text-gray-800 dark:text-neutral-400">
        Retrouvez ici les réponses aux questions les plus fréquentes.
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
          Services & Processus
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
          Tarifs & Délais
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
          À propos de moi
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
                Quels types de projets réalises-tu ?
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
                    Je développe des sites web interactifs, des applications
                    front-end et back-end, ainsi que des solutions full-stack
                    complètes, <em>adaptées aux besoins de mes clients.</em>
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
                Quels langages et technologies maîtrises-tu ?
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
                    Je travaille principalement avec JavaScript, TypeScript,
                    Vue.js, React, Node.js, MongoDB, TailwindCSS et Git,
                    <em
                      >tout en restant ouvert à explorer de nouvelles
                      technologies selon le projet.</em
                    >
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
                Comment se déroule ton processus de travail ?
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
                    Mon processus comprend cinq étapes : découverte des besoins,
                    conception, développement, revue et feedback,
                    <em>puis livraison et support si nécessaire.</em>
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
                Fais-tu des tests avant la livraison ?
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
                    Oui, je teste toutes les fonctionnalités et l’expérience
                    utilisateur pour garantir <em>performance et fiabilité.</em>
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
                Comment fixes-tu le prix d’un projet ?
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
                    Le prix dépend de la complexité, du temps estimé et des
                    fonctionnalités demandées.
                    <em
                      >Je fournis toujours un devis détaillé avant de
                      commencer.</em
                    >
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
                Est-ce que tu travailles au tarif horaire ou au forfait ?
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
                    <em>Je peux m’adapter aux deux :</em> forfait pour un projet
                    complet ou tarif horaire pour des missions ponctuelles ou
                    des ajustements.
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
                Quels sont tes délais moyens de réalisation ?
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
                    Les délais dépendent de la complexité du projet. En général,
                    un site simple <em>peut être livré en 2 à 4 semaines</em>,
                    tandis qu’une application complète
                    <em>nécessite davantage de temps.</em>
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
                Que se passe-t-il si le projet prend plus de temps que prévu ?
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
                    Je communique immédiatement sur tout retard et propose des
                    solutions pour respecter vos priorités tout en maintenant la
                    qualité.
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
                Qui es-tu et quel est ton parcours ?
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
                    <em
                      >Je suis MakVieSainte, software developer et web
                      designer.</em
                    >
                    Passionné par le code depuis plusieurs années, j’ai commencé
                    à programmer au lycée avant de poursuivre mes études à
                    l’université. Dès ma deuxième année universitaire, j’ai
                    effectué un stage qui s’est conclu la même année par un
                    contrat à durée déterminée (CDD). Cette expérience m’a
                    permis de renforcer mes compétences et de confirmer mon
                    engagement dans le domaine du développement web.
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
                Es-tu plus orienté front-end ou back-end ?
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
                    Je maîtrise les deux, mais j’ai une forte passion pour créer
                    des interfaces utilisateurs accessibles et performantes,
                    donc je m'oriente davantage vers le front-end.
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
                Quelles sont tes passions en dehors du développement ?
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
                    En dehors du développement, je m’intéresse beaucoup à la
                    psychologie et j’aime me plonger dans des documentaires pour
                    me cultiver. Je suis également passionné de graphisme et de
                    football.
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
                Quelle compétence aimerais-tu développer cette année ?
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
                    Cette année, j’essaie d’élargir mon champ de compétences
                    au-delà du développement pur. Je m’intéresse
                    particulièrement au DevOps, pour mieux comprendre le
                    déploiement, l’intégration continue et l’automatisation des
                    environnements. En parallèle, je découvre aussi les notions
                    de base des LLM (Large Language Models) dans l’intelligence
                    artificielle. Enfin, je me forme au test automatisé avec
                    UiPath, afin de renforcer la qualité et la fiabilité des
                    projets sur lesquels je travaille.
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
})
</script>

<style scoped></style>
