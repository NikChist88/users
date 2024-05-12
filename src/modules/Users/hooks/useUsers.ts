import { useDeleteUserMutation } from '@/store'
import { toast } from 'react-toastify'

export const useUsers = (id: string, name: string) => {
  const [deleteUser] = useDeleteUserMutation()

  const handleDeleteUser = async () => {
    if (window.confirm(`Delete user ${name}?`)) {
      try {
        await deleteUser(id).unwrap()
        toast.success(`User ${name} delete successfull!`)
      } catch (err) {
        alert(err)
      }
    }
  }

  return {
    handleDeleteUser,
  }
}
