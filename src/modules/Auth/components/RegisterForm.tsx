import { Auth } from '@/types'
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { PasswordField } from './PasswordField'

type RegisterFormProps = {
  onSubmit: (values: Auth) => void
}

export const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<Auth>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })

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
      <PasswordField register={register} />
      <Box
        display={'flex'}
        gap={'15px'}
      >
        <Button
          width={'50%'}
          type="submit"
          backgroundColor={'#FFA42F'}
          color={'#fff'}
          _hover={{ backgroundColor: '#e0912a' }}
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </Button>
        <Button
          width={'50%'}
          type="reset"
          backgroundColor={'#00274A'}
          color={'#fff'}
          _hover={{ backgroundColor: '#013058' }}
          onClick={() => reset()}
        >
          Reset
        </Button>
      </Box>
    </Stack>
  )
}
