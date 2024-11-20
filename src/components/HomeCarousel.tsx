import useEmblaCarousel, { EmblaEventType } from 'embla-carousel-react'
import { useState, useEffect, useCallback } from 'react'
import styles from '../styles/Carousel.module.css'
import { Project } from '@/data/carouselData'

interface CarouselProps {
  slides: Project[]
  autoplayDelay?: number
}

export const Carousel = ({ 
  slides, 
  autoplayDelay = 8000
}: CarouselProps) => {
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null)

  const options = {
    loop: true,
    draggable: true,
    containScroll: 'trimSnaps',
    align: 'center',
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const startAutoplay = useCallback(() => {
    if (autoplayInterval) clearInterval(autoplayInterval)
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, autoplayDelay)
    setAutoplayInterval(interval)
  }, [emblaApi, autoplayInterval, autoplayDelay])

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval)
      setAutoplayInterval(null)
    }
  }, [autoplayInterval])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    startAutoplay()
    
    emblaApi.on('pointerDown', stopAutoplay)
    emblaApi.on('settle', startAutoplay)
    emblaApi.on('select', onSelect)

    return () => {
      stopAutoplay()
      if (emblaApi) {
        emblaApi.off('pointerDown', stopAutoplay)
        emblaApi.off('settle', startAutoplay)
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi, startAutoplay, stopAutoplay, onSelect])

  return (
    <div 
      className={`w-full max-w-[95vw] mx-auto ${styles.carouselContainer}`}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((project, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.projectSlide}>
                <div className={styles.imageContainer}>
                  <img 
                    src={project.desktopImage} 
                    alt={`${project.name} Desktop View`} 
                    className={styles.desktopImage}
                  />
                  <img 
                    src={project.mobileImage} 
                    alt={`${project.name} Mobile View`} 
                    className={styles.mobileImage}
                  />
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={scrollPrev} className={styles.button}>
          ‹
        </button>
        <button onClick={scrollNext} className={styles.button}>
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === selectedIndex ? styles.selected : ''}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}