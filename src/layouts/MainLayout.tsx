import { Outlet } from 'react-router-dom'
import { HomePageHeader } from '@/pages/HomePage/components/HomePageHeader/HomePageHeader'
import { Container } from '@chakra-ui/react'

export const MainLayout = () => {
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
