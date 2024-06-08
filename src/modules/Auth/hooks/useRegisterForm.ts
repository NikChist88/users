import { SubmitHandler, useForm } from 'react-hook-form'
import { Register } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '@/api/authApi'
import { toast } from 'react-toastify'

export const useRegisterForm = () => {
  const [registerUser] = useRegisterMutation()
  const { register, handleSubmit, reset } = useForm<Register>()
  const navigate = useNavigate()

  const resetFormFields = () => {
    reset({ email: '', name: '', password: '' })
  }

  const onRegisterSubmit: SubmitHandler<Register> = async (registerData) => {
    try {
      await registerUser(registerData).unwrap()
      resetFormFields()
      navigate('/')
    } catch {
      toast.error('Some error occurred!')
      resetFormFields()
    }
  }

  return {
    register,
    handleSubmit,
    onRegisterSubmit,
  }
}
