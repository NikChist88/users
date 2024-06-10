import { UserForm } from '@/modules/Users/components'
import { useUsers } from '@/modules/Users'
import './styles.css'

export const AddUserPage = () => {
  const { handleAddUser } = useUsers()

  return (
    <div className="user-page">
      <h2>Add New User</h2>
      <UserForm onSubmit={handleAddUser} />
    </div>
  )
}
