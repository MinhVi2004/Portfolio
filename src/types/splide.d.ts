declare module '@splidejs/react-splide' {
  import { ComponentType } from 'react'
  
  interface SplideProps {
    options?: Record<string, unknown>
    className?: string
    children?: React.ReactNode
  }

  interface SplideSlideProps {
    children?: React.ReactNode
    className?: string
  }

  export const Splide: ComponentType<SplideProps>
  export const SplideSlide: ComponentType<SplideSlideProps>
}

