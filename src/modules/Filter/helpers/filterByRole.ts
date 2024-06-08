import { User } from "@/types"

export const filterByRole = (data: User[], role: string) => {
  return data.filter((user) => user.role === role)
}
