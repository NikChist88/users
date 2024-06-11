import { useAppSelector } from '@/store'
import * as select from '../store/filterSlice'
import { searchByName } from '../helpers/searchByName'
import { filterByRole } from '../helpers/filterByRole'
import { Employee } from '@/types'

export const useFilters = (data: Employee[]) => {
  const limitFilter = useAppSelector(select.limitFilter)
  const roleFilter = useAppSelector(select.roleFilter)
  const searchQuery = useAppSelector(select.searchQuery)
  
  let filteredEmployees

  if (searchQuery) {
    filteredEmployees = searchByName(data, searchQuery)
  } else if (roleFilter) {
    filteredEmployees = filterByRole(data, roleFilter)
  } else {
    filteredEmployees = data
  }

  const totalPages = Math.ceil(filteredEmployees.length / limitFilter)
  const pages = Array.from({ length: totalPages }, (_, i) => i * limitFilter)

  const employees = pages.map((pageIndex) =>
    filteredEmployees.slice(pageIndex, pageIndex + limitFilter)
  )

  const totalItems = Object.values(employees).reduce(
    (acc, value) => acc + value.length,
    0
  )

  return {
    employees,
    totalPages,
    totalItems,
  }
}
