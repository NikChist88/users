import { prisma } from '../prisma/prisma-client'
import { Employees } from '@prisma/client'

export const employeesQueryRepo = {
  async findEmployees(userId: string, role: string): Promise<Employees[]> {
    const employees = await prisma.employees.findMany({
      where: {
        userId,
        role,
      },
    })

    return employees.map((employee) => {
      return this._mapper(employee)
    })
  },

  async findById(id: string): Promise<Employees> {
    const employee = await prisma.employees.findFirst({ where: { id } })
    return this._mapper(employee!)
  },

  _mapper(employee: Employees) {
    return {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      gender: employee.gender,
      dateOfBirth: employee.dateOfBirth,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      role: employee.role,
      company: employee.company,
      country: employee.country,
      aboutMe: employee.aboutMe,
      userId: employee.userId,
    }
  },
}

export type UserOutputModel = {
  id: string
  name: string
  email: string
  password: string
  employees: Employees[]
}

export type EmployeeOutputModel = {
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
  user: UserOutputModel
  userId: string
}
