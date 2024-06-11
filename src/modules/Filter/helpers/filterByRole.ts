import { Employee } from "@/types"

export const filterByRole = (data: Employee[], role: string) => {
  return data.filter((employee) => employee.role === role)
}
