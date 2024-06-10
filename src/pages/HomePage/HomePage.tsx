import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filters, useFilters } from '@/modules/Filter'
import { Pagination, usePagination } from '@/modules/Pagination'
import { Users } from '@/modules/Users'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'

export const HomePage = () => {
  const { users, totalItems, totalPages } = useFilters()
  const { currentPage } = usePagination()
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
      <Users
        users={users}
        currentPage={currentPage}
      />
      <Pagination
        totalItems={totalItems}
        totalPages={totalPages}
      />
    </>
  )
}
