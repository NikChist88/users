import { memo } from 'react'
import { Spinner } from './ui/Spinner'
import { Users } from './modules/Users'
import { Filters, useFilters } from './modules/Filters'
import { Pagination, usePagination } from './modules/Pagination'

export const App = memo(() => {
  const { users, isLoading, totalItems, totalPages } = useFilters()
  const { currentPage } = usePagination()

  return (
    <>
      {isLoading && <Spinner />}
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
})
