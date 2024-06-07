import { HiEyeOff, HiEye } from 'react-icons/hi'
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
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react'

export const LoginForm = () => {
  const { register, handleSubmit, onLoginSubmit, isLoading } = useAuthForm()
  const { isOpen, onToggle } = useDisclosure()

  const onClickReveal = () => {
    onToggle()
  }

  return (
    <Stack spacing="5">
      <FormControl>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input
          id="loginEmail"
          type="email"
          required
          {...register('email', { required: 'Title is required!' })}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password:</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
              color={'#2883CC'}
            />
          </InputRightElement>
          <Input
            id="loginPass"
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
            {...register('password', { required: 'Password is required!' })}
          />
        </InputGroup>
      </FormControl>
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
          isLoading={isLoading}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  )
}
