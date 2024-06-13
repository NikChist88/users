export type Employee = {
  id: string
  firstName: string
  lastName: string
  gender: string
  dateOfBirth: string
  email: string
  phone: string
  address: string
  role: string
  company: string
  country: string
  aboutMe: string
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

export type EmployeeFormValues =
  | 'id'
  | 'firstName'
  | 'lastName'
  | 'gender'
  | 'dateOfBirth'
  | 'email'
  | 'phone'
  | 'role'
  | 'address'
  | 'company'
  | 'country'
  | 'aboutMe'
