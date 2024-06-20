import { useAppSelector } from '@/store'
import { searchByName } from '../helpers/searchByName'
import { filterByRole } from '../helpers/filterByRole'
import { Employees } from '@prisma/index'
import { selectRole, selectSearchQuery } from '../store/filterSlice'

export const useFilters = (data: Employees[]) => {
  const role = useAppSelector(selectRole)
  const searchQuery = useAppSelector(selectSearchQuery)

  let employees

  if (searchQuery) {
    employees = searchByName(data, searchQuery)
  } else if (role) {
    employees = filterByRole(data, role)
  } else {
    employees = data
  }

  return {
    employees,
  }
}
