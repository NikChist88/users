import { User } from "@/types"

export const searchByName = (data: User[], name: string) => {
  return data.filter((user) =>
    user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  )
}