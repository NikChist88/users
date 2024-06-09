import { User } from '@/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from '@/api/usersApi'

export const useUsers = (user: User, onClose?: () => void) => {
  const [addUser] = useAddUserMutation()
  const [updateUser] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUserMutation()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: user?.id || '',
      name: user?.name || '',
      email: user?.email || '',
      role: user?.role || '',
      company: user?.company || '',
      country: user?.country || '',
    },
  })

  const closeModal = () => {
    onClose && onClose()
  }

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      user
        ? await updateUser([user.id, data]).unwrap()
        : await addUser(data).unwrap()
      toast.success(`${user ? 'User data updated!' : 'New user created!'}`)
      reset()
      closeModal()
    } catch (error) {
      alert(error)
      reset()
      closeModal()
    }
  }

  const handleDeleteUser = async () => {
    if (window.confirm(`Delete user ${user.name}?`)) {
      try {
        await deleteUser(user.id).unwrap()
        toast.success(`User ${user.name} delete successfull!`)
      } catch (error) {
        alert(error)
      }
    }
  }

  return {
    handleDeleteUser,
    onSubmit,
    handleSubmit,
    register,
  }
}
