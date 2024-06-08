import { Container } from '@chakra-ui/react'
import { Filters, useFilters } from '@/modules/Filter'
import { Pagination, usePagination } from '@/modules/Pagination'
import { Users } from '@/modules/Users'
import { HomePageHeader } from './components/HomePageHeader/HomePageHeader'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
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
