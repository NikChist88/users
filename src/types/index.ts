export type User = {
  id: string
  name: string
  email: string
  role: string
  company: string
  country: string
}

export type Login = {
  email: string
  password: string
  rememberMe: boolean
}

export type Register = {
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
