export type Employee = {
  id: string
  name: string
  email: string
  role: string
  company: string
  country: string
  userId?: string
}

export type User = {
  id: string
  name: string
  email: string
  password: string
  employees: Employee[]
}

export type Auth = {
  email: string
  password: string
  name?: string
}

export type Response = User & { token: string }
