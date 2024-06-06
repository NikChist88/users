import { useAppSelector, useGetUsersQuery } from '@/store'
import {
  selectLimitFilter,
  selectRoleFilter,
  selectSearchQuery,
} from '../store/filterSlice'
import { searchByName, filterByRole } from '@/helpers'

export const useFilters = () => {
  const limitFilter = useAppSelector(selectLimitFilter)
  const roleFilter = useAppSelector(selectRoleFilter)
  const searchQuery = useAppSelector(selectSearchQuery)
  const { data = [], isLoading } = useGetUsersQuery()

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
    isLoading,
    users,
    totalPages,
    totalItems,
  }
}
