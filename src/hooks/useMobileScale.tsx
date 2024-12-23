import { useState, useEffect } from 'react'

const useMobileScale = (contentWidth: number = 1280) => {
  const [scale, setScale] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth
      const calculatedScale = viewportWidth / contentWidth

      if (viewportWidth <= 768) {
        setIsMobile(true)
        setScale(calculatedScale)
      } else {
        setIsMobile(false)
        setScale(1) // Reset scale for non-mobile
      }
    }

    // Run on mount and window resize
    updateScale()
    window.addEventListener('resize', updateScale)

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [contentWidth])

  return { scale, isMobile }
}

export default useMobileScale
