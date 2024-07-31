export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}

export type CategoryItem = {
  id: number
  name: string
  icon: string
}

export type HotItem = {
  id: number
  title: string
  target: string
  pictures: string[]
  alt: string
  type: number
}

export type GuessItem = {
  desc: string
  id: string
  discount: number
  name: string
  orderNum: number
  picture: string
  price: number
}
