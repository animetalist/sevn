document.addEventListener('DOMContentLoaded', () => {
  // Video play/pause on scroll
  const video = document.querySelector('.video')

  if (video) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? video.play() : video.pause()
      },
      { threshold: 0.5 }
    )
    observer.observe(video)
  }

  // Smooth scroll to anchor
  const header = document.querySelector('.header')
  const headerHeight = header ? header.offsetHeight : 0

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault()
      const targetElement = document.querySelector(anchor.getAttribute('href'))
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    })
  })

  // MOBILE NAV
  const hambBtn = document.querySelector('.header_hamb')
  const mobileNav = document.querySelector('.header_menu')

  if (hambBtn && mobileNav) {
    const getRemValue = () =>
      parseFloat(getComputedStyle(document.documentElement).fontSize)

    const handleClose = () => {
      hambBtn.classList.remove('active')
      mobileNav.classList.remove('show')
      document.body.style.overflow = ''
    }

    hambBtn.addEventListener('click', () => {
      hambBtn.classList.toggle('active')
      mobileNav.classList.toggle('show')
      document.body.style.overflow = hambBtn.classList.contains('active')
        ? 'hidden'
        : ''
    })

    document.addEventListener('click', (e) => {
      if (!hambBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        handleClose()
      }
    })

    window.addEventListener('resize', () => {
      if (
        window.innerWidth >= 48 * getRemValue() &&
        mobileNav.classList.contains('show')
      ) {
        handleClose()
      }
    })

    document.querySelectorAll('.header_menu_link').forEach((item) => {
      item.addEventListener('click', () => {
        if (window.innerWidth < 48 * getRemValue()) {
          handleClose()
        }
      })
    })
  }
})
