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
import { useAuthForm } from '../hooks/useAuthForm'
import { LoginData } from '@/types'
import { useForm } from 'react-hook-form'

type PasswordFieldProps = {
  form: string
}

export const PasswordField: FC<PasswordFieldProps> = ({ form }) => {
  const { isOpen, onToggle } = useDisclosure()

  const onClickReveal = () => {
    onToggle()
  }

  return (
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
          id={form === 'login' ? 'loginPass' : 'regPass'}
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          required
        />
      </InputGroup>
    </FormControl>
  )
}

PasswordField.displayName = 'PasswordField'
