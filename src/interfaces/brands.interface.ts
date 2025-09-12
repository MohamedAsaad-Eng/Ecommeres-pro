export interface Root {
  results: number
  metadata: Metadata
  data: BrandsInterface[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface BrandsInterface {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
