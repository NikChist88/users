import { User } from '@/types'
import { toast } from 'react-toastify'
import {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from '@/api/usersApi'
import { useNavigate, useParams } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'

export const useUsers = (user?: User) => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetUserByIdQuery(id || '')
  const [addUser] = useAddUserMutation()
  const [updateUser] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUserMutation()
  const navigate = useNavigate()

  const handleUpdateUser: SubmitHandler<User> = async (submitData: User) => {
    try {
      const updatedUser = {
        ...data,
        ...submitData,
      }

      await updateUser(updatedUser).unwrap()
      toast.success('User data updated!')
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }

  const handleAddUser: SubmitHandler<User> = async (submitData: User) => {
    try {
      await addUser(submitData).unwrap()
      toast.success('New user created!')
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }

  const handleDeleteUser = async () => {
    if (window.confirm(`Delete user ${user?.name}?`)) {
      try {
        user && (await deleteUser(user?.id).unwrap())
        toast.success(`User ${user?.name} delete successfully!`)
      } catch (error) {
        alert(error)
      }
    }
  }

  return {
    handleDeleteUser,
    handleAddUser,
    handleUpdateUser,
    data,
    isLoading,
  }
}
