export interface Project {
  id: number
  title: string
  imageSrc: string | string[]
  videoSrc?: string
  url: string
  description?: string
  technologies?: string[]
  year: number
  category: string
  details?: string
}
