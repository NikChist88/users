import { FC } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react'
import { UseFormRegister } from 'react-hook-form'
import { Auth } from '@/types'

type PasswordFieldProps = {
  form?: string
  register: UseFormRegister<Auth>
}

export const PasswordField: FC<PasswordFieldProps> = ({ form, register }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
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
          id={form === 'login' ? 'loginPass' : 'regPass'}
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          {...register('password', { required: 'Password is required!' })}
        />
      </InputGroup>
    </FormControl>
  )
}
