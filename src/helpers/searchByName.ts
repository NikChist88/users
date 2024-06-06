import { UserType } from "@/types"

export const searchByName = (data: UserType[], name: string) => {
  return data.filter((user) =>
    user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  )
}