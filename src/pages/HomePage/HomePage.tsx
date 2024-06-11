import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filters, useFilters } from '@/modules/Filter'
import { Pagination, usePagination } from '@/modules/Pagination'
import { Employees } from '@/modules/Employees'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'
import { Spinner } from '@/ui/Spinner'

export const HomePage = () => {
  const { isLoading, employees, totalItems, totalPages } = useFilters()
  const { page } = usePagination()
  const user = useAppSelector(selectUser)
  const userEmployees = employees[page]?.filter((e) => e.userId === user!.id)
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
      <Employees employees={userEmployees} />
      <Pagination
        totalItems={totalItems}
        totalPages={totalPages}
      />
    </>
  )
}
