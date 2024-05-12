import { ChangeEvent } from 'react'
import {
  setSearchQueryAC,
  setRoleFilterAC,
  setLimitFilterAC,
  selectSearchQuery,
  selectRoleFilter,
  selectLimitFilter,
} from '../store/filterSlice'
import { useAppDispatch, useAppSelector, useGetUsersQuery } from '@/store'
import { UserType } from '@/types'

export const useFilters = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(selectSearchQuery)
  const roleFilter = useAppSelector(selectRoleFilter)
  const limitFilter = useAppSelector(selectLimitFilter)
  const { data = [], isLoading } = useGetUsersQuery()

  const handleChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQueryAC(e.currentTarget.value))
  }

  const handleChangePageFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimitFilterAC(+e.currentTarget.value))
  }

  const handleChangeRoleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRoleFilterAC(e.currentTarget.value))
  }

  const filterByName = (data: UserType[], name: string) => {
    return data.filter((user) =>
      user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    )
  }

  const filterByRole = (data: UserType[], role: string) => {
    return data.filter((user) => user.role === role)
  }

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
    searchQuery,
    roleFilter,
    limitFilter,

    isLoading,
    users,
    totalPages,
    items,

    handleChangeSearchQuery,
    handleChangePageFilter,
    handleChangeRoleFilter,
  }
}
