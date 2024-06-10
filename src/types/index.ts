export type User = {
  id: string
  name: string
  email: string
  role: string
  company: string
  country: string
}

export type Auth = {
  email: string
  password: string
  name?: string
}

export type Response = {
  id: string
  email: string
  name: string
  token: string
}
