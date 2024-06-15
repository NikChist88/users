import { prisma } from '../prisma/prisma-client'
import { Employees } from '@prisma/client'

export const employeesRepo = {
  findAll() {
    return prisma.employees.findMany()
  },

  findById(id: string) {
    return prisma.employees.findFirst({ where: { id } })
  },

  create(data: Employees) {
    return prisma.employees.create({
      data: { ...data, userId: data.userId },
    })
  },

  update(id: string, data: Employees) {
    return prisma.employees.update({ where: { id }, data: data })
  },

  delete(id: string) {
    return prisma.employees.delete({ where: { id } })
  },
}
