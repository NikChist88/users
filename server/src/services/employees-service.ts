import { Employees } from '@prisma/client'
import { employeesRepo } from '../repositories'

export const employeesService = {
  async createEmployee(data: Employees): Promise<Employees | null> {
    try {
      const employee = { ...data }
      return await employeesRepo.create(employee)
    } catch {
      return null
    }
  },

  async createEmployees(data: Employees[]): Promise<Employees[] | null> {
    try {
      const employees = await employeesRepo.createMany(data)
      return employees
    } catch {
      return null
    }
  },

  async updateEmployee(
    id: string,
    data: Employees
  ): Promise<boolean | undefined> {
    try {
      const employee = await employeesRepo.update(id, data)
      if (employee) return true
    } catch {
      return false
    }
  },

  async deleteEmployee(id: string): Promise<boolean | undefined> {
    try {
      const employee = await employeesRepo.delete(id)
      if (employee) return true
    } catch {
      return false
    }
  },
}
