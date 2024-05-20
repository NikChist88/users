import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginData, RegisterData } from '../types'
import { toast } from 'react-toastify'

export const useAuthForm = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      rememberMe: false,
    },
  })

  const onLoginSubmit: SubmitHandler<LoginData> = (data) => {}
  const onRegisterSubmit: SubmitHandler<RegisterData> = async (data) => {}

  return {
    register,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit,
  }
}
