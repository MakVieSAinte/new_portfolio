import type { DirectiveBinding } from 'vue'

function applyInitial(el: HTMLElement) {
  el.style.transition = 'opacity 500ms ease, transform 500ms ease'
  el.style.opacity = '0'
  el.style.transform = 'translateY(20px)'
}

function reveal(el: HTMLElement) {
  el.style.opacity = '1'
  el.style.transform = 'translateY(0)'
}

const RevealDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) {
      reveal(el)
      return
    }

    applyInitial(el)

    const rootMargin = (binding?.value?.rootMargin as string) || '0px 0px -7% 0px'
    const threshold = (binding?.value?.threshold as number) || 0.07

    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(el)
          io.disconnect()
          break
        }
      }
    }, { root: null, rootMargin, threshold })

    io.observe(el)
    ;(el as any).__revealObserver = io
  },
  unmounted(el: HTMLElement) {
    const io: IntersectionObserver | undefined = (el as any).__revealObserver
    if (io) io.disconnect()
  },
}

export default RevealDirective
