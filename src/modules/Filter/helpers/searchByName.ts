import { Employees } from '@prisma/index'

export const searchByName = (data: Employees[], name: string) => {
  return data.filter((employee) =>
    employee.firstName.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  )
}
