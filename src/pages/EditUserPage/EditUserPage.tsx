import { UserForm } from '@/modules/Users/components'
import { useUsers } from '@/modules/Users'
import { Spinner } from '@/ui/Spinner'
import './styles.css'

export const EditUserPage = () => {
  const { data, isLoading, handleUpdateUser } = useUsers()

  if (isLoading) return <Spinner />

  return (
    <div className="user-page">
      <h2>Edit User</h2>
      <UserForm
        user={data}
        onSubmit={handleUpdateUser}
      />
    </div>
  )
}
