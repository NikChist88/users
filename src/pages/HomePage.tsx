import { Container, Spinner } from '@chakra-ui/react'
import { Filters, useFilters } from '@/modules/Filters'
import { Pagination, usePagination } from '@/modules/Pagination'
import { Users } from '@/modules/Users'

export const HomePage = () => {
  const { users, isLoading, totalItems, totalPages } = useFilters()
  const { currentPage } = usePagination()

  return (
    <Container
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      maxW={'1440px'}
      w={'100%'}
      padding={'30px'}
    >
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
    </Container>
  )
}
