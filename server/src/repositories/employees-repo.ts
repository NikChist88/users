import { prisma } from '../prisma/prisma-client'
import { Employees } from '@prisma/client'

export const employeesRepo = {
  async create(data: Employees): Promise<Employees> {
    const employee = await prisma.employees.create({ data: { ...data } })
    return this._mapper(employee)
  },

  async createMany(data: Employees[]): Promise<Employees[]> {
    const employees = await prisma.employees.createManyAndReturn({
      data: [...data],
    })

    return employees.map((employee) => {
      return this._mapper(employee)
    })
  },

  async update(id: string, data: Employees): Promise<Employees> {
    const employee = await prisma.employees.update({ where: { id }, data })
    return this._mapper(employee)
  },

  async delete(id: string) {
    const employee = await prisma.employees.delete({ where: { id } })
    return this._mapper(employee)
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
