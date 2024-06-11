import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filters, useFilters } from '@/modules/Filter'
import { Pagination, usePagination } from '@/modules/Pagination'
import { Employees } from '@/modules/Employees'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'

export const HomePage = () => {
  const { employees, totalItems, totalPages } = useFilters()
  const { page } = usePagination()
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user, navigate])

  return (
    <>
      <Filters />
      <Employees
        employees={employees}
        currentPage={page}
      />
      <Pagination
        totalItems={totalItems}
        totalPages={totalPages}
      />
    </>
  )
}
