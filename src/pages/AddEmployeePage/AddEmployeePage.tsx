import { EmployeeForm } from '@/modules/Employees/components'
import { useEmployees } from '@/modules/Employees'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'
import './styles.css'

export const AddEmployeePage = () => {
  const { handleAddEmployee } = useEmployees()
  const user = useAppSelector(selectUser)

  return (
    <div className="user-page">
      <h2>Add New User</h2>
      <EmployeeForm
        onSubmit={handleAddEmployee}
        userId={user?.id}
      />
    </div>
  )
}
