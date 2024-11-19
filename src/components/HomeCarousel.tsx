import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from 'react'
import styles from '../styles/Carousel.module.css'
import { Project } from '@/data/carouselData'

interface CarouselProps {
  slides: Project[]
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((project, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.projectSlide}>
                <h3 className={styles.projectName}>{project.name}</h3>
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