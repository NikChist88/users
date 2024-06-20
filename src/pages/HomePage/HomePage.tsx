import { Filters, useFilters } from '@/modules/Filter'
import {
  EmployeesTable,
  selectAllEntries,
  selectEmployees,
} from '@/modules/Employees'
import { Pagination, usePagination } from '@/modules/Pagination'
import { useAppSelector } from '@/store'

export const HomePage = () => {
  const data = useAppSelector(selectEmployees)
  const allEntries = useAppSelector(selectAllEntries)
  const { employees } = useFilters(data!)
  const { firstIndex, lastIndex } = usePagination(allEntries)

  return (
    <>
      <Filters />
      <EmployeesTable
        employees={employees.slice(firstIndex, lastIndex)}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        allEntries={allEntries}
      />
      <Pagination allEntries={allEntries} />
    </>
  )
}
