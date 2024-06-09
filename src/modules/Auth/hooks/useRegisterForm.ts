import { SubmitHandler, useForm } from 'react-hook-form'
import { Register } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '@/modules/Auth/api/authApi'
import { toast } from 'react-toastify'

export const useRegisterForm = () => {
  const [registerUser] = useRegisterMutation()
  const { register, handleSubmit, reset } = useForm<Register>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })
  const navigate = useNavigate()

  const onRegisterSubmit: SubmitHandler<Register> = async (registerData) => {
    try {
      await registerUser(registerData).unwrap()
      reset()
      navigate('/')
    } catch {
      toast.error('Some error occurred!')
      reset()
    }
  }

  return {
    register,
    handleSubmit,
    onRegisterSubmit,
  }
}
