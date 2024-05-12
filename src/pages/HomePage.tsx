import { Container } from '@chakra-ui/react'
import { App } from '../App'

export const HomePage = () => {
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
      <App />
    </Container>
  )
}
