import { useAuthForm } from '../hooks/useAuthForm'
import { PasswordField } from './PasswordField'
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
} from '@chakra-ui/react'

export const LoginForm = () => {
  const { register, handleSubmit, onLoginSubmit } = useAuthForm()

  return (
    <Stack spacing="5">
      <FormControl>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input
          id="loginEmail"
          type="email"
          required
          {...register('email')}
        />
      </FormControl>
      <PasswordField
        form={'login'}
      />
      <HStack justify="space-between">
        <Checkbox
          colorScheme="blue"
          {...register('rememberMe')}
        >
          Remember me
        </Checkbox>
        <Button
          variant="text"
          size="sm"
        >
          Forgot password?
        </Button>
      </HStack>
      <Stack spacing="6">
        <Button
          type="submit"
          colorScheme="blue"
          onClick={handleSubmit(onLoginSubmit)}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  )
}
