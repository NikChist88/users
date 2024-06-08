import { Container } from '@chakra-ui/react'
import { Filters, useFilters } from '@/modules/Filter'
import { Pagination, usePagination } from '@/modules/Pagination'
import { Users } from '@/modules/Users'
import { selectUser, selectIsAuthenticated } from '@/modules/Auth'
import { HomePageHeader } from './components/HomePageHeader/HomePageHeader'
import { Spinner } from '@/ui/Spinner'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import { useEffect } from 'react'

export const HomePage = () => {
  const { users, isLoading, totalItems, totalPages } = useFilters()
  const { currentPage } = usePagination()
  const user = useAppSelector(selectUser)
  const authenticated = useAppSelector(selectIsAuthenticated)
  const navigate = useNavigate()
  console.log(user)
  console.log(authenticated)

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user, navigate])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <HomePageHeader />
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
