import { EmployeeForm } from '@/modules/Employees/components'
import { useEmployees } from '@/modules/Employees'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'
import './styles.css'

export const AddEmployeePage = () => {
  const user = useAppSelector(selectUser)
  const { handleAddEmployee } = useEmployees()

  return (
    <div className="user-page">
      <h2>Add New Employee</h2>
      <EmployeeForm
        user={user!}
        onSubmit={handleAddEmployee}
      />
    </div>
  )
}
