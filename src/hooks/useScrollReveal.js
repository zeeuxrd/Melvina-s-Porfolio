import { useEffect } from 'react'

export default function useScrollReveal(dependency = null) {
  useEffect(() => {
    // Step 1: Reset elements below the viewport on page change so animations re-trigger on scroll
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top >= window.innerHeight * 0.92) {
        el.classList.remove('is-visible')
      }
    })

    const revealVisibleElements = () => {
      const elements = document.querySelectorAll('[data-reveal]')
      const windowHeight = window.innerHeight
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < windowHeight * 0.92 && rect.bottom > 0) {
          el.classList.add('is-visible')
        }
      })
    }

    revealVisibleElements()
    const rAF = requestAnimationFrame(() => {
      revealVisibleElements()
      // Step 2: ONLY NOW activate the animation system
      // This ensures elements in the viewport are already .is-visible
      // before the CSS hides anything below
      document.documentElement.classList.add('scroll-reveal-ready')
    })

    // Step 3: IntersectionObserver for scroll-triggered entries
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      root: null,
      rootMargin: '0px 0px 40px 0px',
      threshold: 0.05,
    })

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el)
      }
    })

    return () => {
      cancelAnimationFrame(rAF)
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [dependency])
}
