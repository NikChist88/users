import { Logo, LoginForm, RegisterForm } from './components'
import {
  Box,
  Container,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

export const Auth = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="4">
        <Stack spacing="4">
          <Logo />
          <Heading
            textAlign={'center'}
            size={{ base: 'md', md: 'md' }}
          >
            Welcome: Login or Register
          </Heading>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          backgroundColor={'#fff'}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Tabs colorScheme="blue">
              <TabList
                display={'flex'}
                justifyContent={'space-between'}
              >
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <LoginForm />
                </TabPanel>
                <TabPanel>
                  <RegisterForm />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
