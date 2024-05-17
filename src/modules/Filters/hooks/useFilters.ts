import { useCallback } from 'react'
import { useAppSelector, useGetUsersQuery } from '@/store'
import { UserType } from '@/types'
import {
  selectLimitFilter,
  selectRoleFilter,
  selectSearchQuery,
} from '../store/filterSlice'

export const useFilters = () => {
  const limitFilter = useAppSelector(selectLimitFilter)
  const roleFilter = useAppSelector(selectRoleFilter)
  const searchQuery = useAppSelector(selectSearchQuery)
  const { data = [], isLoading } = useGetUsersQuery()

  const filterByName = useCallback((data: UserType[], name: string) => {
    return data.filter((user) =>
      user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    )
  }, [])

  const filterByRole = useCallback((data: UserType[], role: string) => {
    return data.filter((user) => user.role === role)
  }, [])

  let filteredUsers

  if (searchQuery !== '') {
    filteredUsers = filterByName(data, searchQuery)
  } else if (roleFilter !== '') {
    filteredUsers = filterByRole(data, roleFilter)
  } else {
    filteredUsers = data
  }

  const totalPages = Math.ceil(filteredUsers.length / limitFilter)
  const pages = Array.from({ length: totalPages }, (_, i) => i * limitFilter)

  const users = pages.map((pageIndex) =>
    filteredUsers.slice(pageIndex, pageIndex + limitFilter)
  )

  const items = Object.values(users).reduce(
    (acc, value) => acc + value.length,
    0
  )

  return {
    isLoading,
    users,
    totalPages,
    items,
  }
}
