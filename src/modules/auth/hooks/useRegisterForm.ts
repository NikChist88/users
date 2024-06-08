import { SubmitHandler, useForm } from 'react-hook-form'
import { Register } from '@/types'

export const useRegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<Register>()

  const onRegisterSubmit: SubmitHandler<Register> = async (registerData) => {}

  return {
    register,
    handleSubmit,
    onRegisterSubmit,
  }
}
