// 📁 src/composables/useI18n.ts
import { ref, shallowRef, computed, watch } from 'vue'

const locale = ref(localStorage.getItem('lang') || 'en')
const translations = shallowRef<Record<string, any>>({})

async function loadMessages(page: string) {
  try {
    const messages = await import(`../locales/${locale.value}/${page}.json`)
    translations.value = messages.default
  } catch (e) {
    console.error(`Erreur chargement locale ${locale.value}/${page}.json :`, e)
    translations.value = {}
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
    texts
  }
}
