import { ref, shallowRef, computed, watch } from 'vue'

const locale = ref(localStorage.getItem('lang') || 'en')
const translations = shallowRef<Record<string, any>>({})

async function loadMessages(pageInput: string) {
  // Si plusieurs pages sont spécifiées (séparées par des virgules), les charger une par une
  const pages = pageInput.split(',').map(p => p.trim())

  for (const page of pages) {
    if (!page) continue

    try {
      // console.log(`🌍 Chargement des traductions: ${locale.value}/${page}.json`)
      const messages = await import(`../locales/${locale.value}/${page}.json`)

      // Fusionner avec les traductions existantes plutôt que de remplacer
      translations.value = {
        ...translations.value,
        ...messages.default,
      }

      // console.log(`✅ Traductions chargées pour ${page}:`, messages.default)
    } catch (e) {
      console.error(
        `❌ Erreur chargement locale ${locale.value}/${page}.json:`,
        e,
      )

      // Essayer de charger le fichier en français si la langue actuelle n'est pas disponible
      if (locale.value !== 'fr') {
        try {
          // console.log(`🔄 Tentative avec locale de secours: fr/${page}.json`)
          const fallbackMessages = await import(`../locales/fr/${page}.json`)

          // Fusionner avec les traductions existantes
          translations.value = {
            ...translations.value,
            ...fallbackMessages.default,
          }

          // console.log(
          //   `✅ Traductions de secours chargées pour ${page}:`,
          //   fallbackMessages.default,
          // )
        } catch (fallbackError) {
          console.error(
            `❌ Erreur avec locale de secours fr/${page}.json:`,
            fallbackError,
          )
        }
      }
    }
  }
}

const texts = computed(() => translations.value || {})

function setLocale(lang: string, page: string) {
  locale.value = lang
  localStorage.setItem('lang', lang)
  loadMessages(page)
}

export function useI18n(page: string) {
  loadMessages(page)
  watch(locale, () => loadMessages(page))

  return {
    locale,
    setLocale,
    texts,
  }
}
