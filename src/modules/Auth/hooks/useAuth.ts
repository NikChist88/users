import { Auth } from '@/types'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useLoginMutation, useRegisterMutation } from '../api/authApi'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const [loginUser, { isLoading }] = useLoginMutation()
  const [registerUser] = useRegisterMutation()
  const navigate = useNavigate()

  const onLoginSubmit: SubmitHandler<Auth> = async (loginData) => {
    try {
      await loginUser(loginData).unwrap()
      navigate('/')
    } catch {
      toast.error('Wrong email or password!')
    }
  }

  const onRegisterSubmit: SubmitHandler<Auth> = async (registerData) => {
    try {
      await registerUser(registerData).unwrap()
      navigate('/')
    } catch {
      toast.error('Failed to create user!')
    }
  }

  return {
    onLoginSubmit,
    onRegisterSubmit,
    isLoading,
  }
}
