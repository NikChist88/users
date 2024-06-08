import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '@/api/authApi'
import { Login } from '@/types'
import { toast } from 'react-toastify'
import { useDisclosure } from '@chakra-ui/react'

export const useLoginForm = () => {
  const [loginUser, { isLoading }] = useLoginMutation()
  const { register, handleSubmit, reset } = useForm<Login>()
  const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure()

  const onClickReveal = () => {
    onToggle()
  }

  const onLoginSubmit: SubmitHandler<Login> = async (loginData) => {
    try {
      await loginUser(loginData).unwrap()
      reset({ email: '', password: '', rememberMe: false })
      // navigate('/')
    } catch {
      toast.error('Wrong email or password!')
      reset({ email: '', password: '', rememberMe: false })
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
