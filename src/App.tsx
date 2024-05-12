import { Spinner } from './ui/Spinner'
import { Users } from './modules/Users'
import { Filters, useFilters } from './modules/Filters'
import { Pagination, usePagination } from './modules/Pagination'

export const App = () => {
  const { users, isLoading, items, totalPages } = useFilters()
  const { currentPage } = usePagination()

  if (isLoading) return <Spinner />

  return (
    <>
      <Filters />
      <Users
        users={users}
        currentPage={currentPage}
      />
      <Pagination
        items={items}
        totalPages={totalPages}
      />
    </>
  )
}
