import { Container } from '@chakra-ui/react'
import { Filters, useFilters } from '@/modules/filter'
import { Pagination, usePagination } from '@/modules/pagination'
import { Users } from '@/modules/users'
import { Header } from '@/components/Header/Header'
import { Spinner } from '@/ui/Spinner'

export const HomePage = () => {
  const { users, isLoading, totalItems, totalPages } = useFilters()
  const { currentPage } = usePagination()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Header />
      <Container
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        maxW={'1440px'}
        w={'100%'}
        padding={'30px'}
      >
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
    </>
  )
}
