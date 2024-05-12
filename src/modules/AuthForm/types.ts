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

export type AuthData = {
  email: string
  password: string
  name?: string
  rememberMe?: boolean
}