import { useAppSelector } from '@/store'
import { useGetUsersQuery } from '@/api/usersApi'
import * as select from '../store/filterSlice'
import { searchByName } from '../helpers/searchByName'
import { filterByRole } from '../helpers/filterByRole'

export const useFilters = () => {
  const limitFilter = useAppSelector(select.limitFilter)
  const roleFilter = useAppSelector(select.roleFilter)
  const searchQuery = useAppSelector(select.searchQuery)
  const { data = [] } = useGetUsersQuery()

  let filteredUsers

  if (searchQuery) {
    filteredUsers = searchByName(data, searchQuery)
  } else if (roleFilter) {
    filteredUsers = filterByRole(data, roleFilter)
  } else {
    filteredUsers = data
  }

  const totalPages = Math.ceil(filteredUsers.length / limitFilter)
  const pages = Array.from({ length: totalPages }, (_, i) => i * limitFilter)

  const users = pages.map((pageIndex) =>
    filteredUsers.slice(pageIndex, pageIndex + limitFilter)
  )

  const totalItems = Object.values(users).reduce(
    (acc, value) => acc + value.length,
    0
  )

  return {
    users,
    totalPages,
    totalItems,
  }
}
