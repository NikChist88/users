import { useRegisterForm } from '../hooks/useRegisterForm'
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react'
import { HiEyeOff, HiEye } from 'react-icons/hi'

export const RegisterForm = () => {
  const { register, handleSubmit, onRegisterSubmit } = useRegisterForm()
  const { isOpen, onToggle } = useDisclosure()

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
      <FormControl>
        <FormLabel htmlFor="password">Password:</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={() => onToggle()}
              color={'#2883CC'}
            />
          </InputRightElement>
          <Input
            id="regPass"
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
            {...register('password', { required: 'Password is required!' })}
          />
        </InputGroup>
      </FormControl>
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
