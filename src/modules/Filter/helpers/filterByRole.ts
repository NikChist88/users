import { Employees } from '@prisma/index'

export const filterByRole = (data: Employees[], role: string) => {
  return data.filter((employee) => employee.role === role)
}
