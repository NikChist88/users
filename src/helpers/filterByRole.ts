import { UserType } from "@/types"

export const filterByRole = (data: UserType[], role: string) => {
  return data.filter((user) => user.role === role)
}
