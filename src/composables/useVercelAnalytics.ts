import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

/**
 * Composable pour intégrer Vercel Analytics
 * Fait le tracking des page views et des événements
 */
export function useVercelAnalytics() {
  const router = useRouter()

  onMounted(async () => {
    // Dynamically import Analytics to avoid SSR issues
    if (typeof window !== 'undefined') {
      try {
        const { inject } = await import('@vercel/analytics')
        inject()
      } catch (error) {
        console.warn('Vercel Analytics failed to load:', error)
      }
    }
  })

  /**
   * Track custom events
   * @param eventName - Name of the event
   * @param properties - Custom properties for the event
   */
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).va) {
      ;(window as any).va('event', {
        name: eventName,
        ...properties,
      })
    }
  }

  /**
   * Track page view with additional data
   */
  const trackPageView = (pageName?: string) => {
    if (typeof window !== 'undefined' && (window as any).va) {
      ;(window as any).va('pageview', {
        page: pageName || router.currentRoute.value.path,
      })
    }
  }

  return {
    trackEvent,
    trackPageView,
  }
}
