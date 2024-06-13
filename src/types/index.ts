import { Employees } from '@prisma/index'

export type User = {
  id: string
  name: string
  email: string
  password: string
  employees: Employees[]
}

export type Auth = {
  email: string
  password: string
  name?: string
}

export type Response = User & { token: string }