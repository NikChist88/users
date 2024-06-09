import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoginMutation } from '@/modules/Auth/api/authApi'
import { Login } from '@/types'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const useLoginForm = () => {
  const [loginUser, { isLoading }] = useLoginMutation()
  const { register, handleSubmit, reset } = useForm<Login>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  const navigate = useNavigate()

  const onLoginSubmit: SubmitHandler<Login> = async (loginData) => {
    try {
      await loginUser(loginData).unwrap()
      reset()
      navigate('/')
    } catch {
      toast.error('Wrong email or password!')
      reset()
    }
  }

  return {
    register,
    handleSubmit,
    onLoginSubmit,
    isLoading,
  }
}
