import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { PasswordField } from './PasswordField'
import { Auth } from '@/types'
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
} from '@chakra-ui/react'

type LoginFormProps = {
  isLoading: boolean
  onSubmit: (values: Auth) => void
}

export const LoginForm: FC<LoginFormProps> = ({ isLoading, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<Auth>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

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
      <PasswordField
        form={'login'}
        register={register}
      />
      <HStack justify="space-between">
        <Checkbox colorScheme="blue">Remember me</Checkbox>
        <Button
          variant="text"
          size="sm"
        >
          Forgot password?
        </Button>
      </HStack>
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
          isLoading={isLoading}
        >
          Login
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
