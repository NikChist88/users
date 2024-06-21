import { useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import { HomePageHeader } from '@/pages/HomePage/components/HomePageHeader/HomePageHeader'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectUser } from '@/modules/Auth'
import { useGetEmployeesQuery, setAllEntries } from '@/modules/Employees'
import { Spinner } from '@/ui/Spinner'

export const MainLayout = () => {
  const user = useAppSelector(selectUser)
  const { isLoading } = useGetEmployeesQuery(user && user.id)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/auth')
    dispatch(setAllEntries(user && user.employeesCount))
  }, [user, navigate])

  if (isLoading) return <Spinner />

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
        <Outlet />
      </Container>
    </>
  )
}
