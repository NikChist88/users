import { PasswordField } from './PasswordField'
import { useAuthForm } from '../hooks/useAuthForm'
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

export const RegisterForm = () => {
  const { register, handleSubmit, onRegisterSubmit } = useAuthForm()

  return (
    <Stack spacing="5">
      <FormControl>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input
          id="regEmail"
          type="email"
          required
          {...register('email')}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <Input
          id="name"
          type="name"
          required
          {...register('name')}
        />
      </FormControl>
      <PasswordField
        form={'register'}
      />
      <Stack spacing="6">
        <Button
          type="submit"
          colorScheme="blue"
          onClick={handleSubmit(onRegisterSubmit)}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  )
}
