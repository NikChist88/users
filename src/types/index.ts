export type UserType = {
  id: string
  name: string
  email: string
  role: string
  company: string
  country: string
}

export type ResponseData = {
  first: number
  prev: null | number
  next: number
  last: number
  pages: number
  items: number
  data: UserType[]
}
