export type UserType = {
  id: string
  name: string
  email: string
  role: string
  company: string
  country: string
}

export type LoginData = {
  email: string
  password: string
  rememberMe: boolean
}

export type RegisterData = {
  email: string
  name: string
  password: string
}

export type Response = {
  id: string
  email: string
  name: string
  token: string
}
