import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginData, RegisterData } from '@/types'
import { useLoginMutation } from '@/api/authApi'
import { toast } from 'react-toastify'
import { selectUser } from '../store/authSlice'
import { useAppSelector } from '@/store'
import { useEffect } from 'react'

export const useAuthForm = () => {
  const [loginUser, { isLoading }] = useLoginMutation()
  const { register, handleSubmit, reset } = useForm<LoginData>()
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  const onLoginSubmit: SubmitHandler<LoginData> = async (loginData) => {
    try {
      await loginUser(loginData).unwrap()
      reset()
      navigate('/')
    } catch {
      toast.error('Autorization error!')
      reset()
    }
  }

  const onRegisterSubmit: SubmitHandler<RegisterData> = async (regData) => {}

  return {
    register,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    isLoading,
  }
}
