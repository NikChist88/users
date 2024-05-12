import { useForm, SubmitHandler } from 'react-hook-form'
import { useAddUserMutation, useUpdateUserMutation } from '@/store'
import { UserType } from '@/types'
import { toast } from 'react-toastify'

export const useUserForm = (user: UserType, onClose: () => void) => {
  const [addUser] = useAddUserMutation()
  const [updateUser] = useUpdateUserMutation()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      role: user?.role,
      company: user?.company,
      country: user?.country,
    },
  })

  const onSubmit: SubmitHandler<UserType> = async (data) => {
    try {
      user
        ? await updateUser([user.id, data]).unwrap()
        : await addUser(data).unwrap()
      toast.success(`${user ? 'User data updated!' : 'New user created!'}`)
      reset()
      onClose()
    } catch (error) {
      alert(error)
      reset()
      onClose()
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
  }
}
