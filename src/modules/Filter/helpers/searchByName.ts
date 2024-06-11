import { Employee } from "@/types"

export const searchByName = (data: Employee[], name: string) => {
  return data.filter((employee) =>
    employee.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  )
}