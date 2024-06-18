import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filters, useFilters } from '@/modules/Filter'
import { EmployeesTable, useGetEmployeesQuery } from '@/modules/Employees'
import {
  Pagination,
  selectPageNumber,
  selectPageSize,
  useGetEmployeesCountQuery,
} from '@/modules/Pagination'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'
import { Spinner } from '@/ui/Spinner'

export const HomePage = () => {
  const pageSize = useAppSelector(selectPageSize)
  const pageNumber = useAppSelector(selectPageNumber)
  const user = useAppSelector(selectUser)
  const { data = [], isLoading } = useGetEmployeesQuery([
    pageSize,
    pageNumber,
    user!.id,
  ])
  const { filteredEmployees } = useFilters(data)
  const { currentData } = useGetEmployeesCountQuery(user!.id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user, navigate])

  if (isLoading) return <Spinner />

  return (
    <>
      <Filters />
      <EmployeesTable
        employees={filteredEmployees}
        count={currentData!}
      />
      <Pagination count={currentData!} />
    </>
  )
}
