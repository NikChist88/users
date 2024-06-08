import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoginMutation } from '@/api/authApi'
import { Login } from '@/types'
import { toast } from 'react-toastify'
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const useLoginForm = () => {
  const [loginUser, { isLoading }] = useLoginMutation()
  const { register, handleSubmit, reset } = useForm<Login>()
  const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure()

  const onClickReveal = () => {
    onToggle()
  }

  const resetFormFields = () => {
    reset({ email: '', password: '', rememberMe: false })
  }

  const onLoginSubmit: SubmitHandler<Login> = async (loginData) => {
    try {
      await loginUser(loginData).unwrap()
      resetFormFields()
      navigate('/')
    } catch {
      toast.error('Wrong email or password!')
      resetFormFields()
    }
  }

  return {
    register,
    handleSubmit,
    onLoginSubmit,
    isLoading,

    isOpen,
    onClickReveal,
  }
}
