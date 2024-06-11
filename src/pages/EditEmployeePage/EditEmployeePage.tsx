import { EmployeeForm } from '@/modules/Employees/components'
import { useEmployees } from '@/modules/Employees'
import { Spinner } from '@/ui/Spinner'
import './styles.css'

export const EditEmployeePage = () => {
  const { data, isLoading, handleUpdateEmployee } = useEmployees()

  if (isLoading) return <Spinner />

  return (
    <div className="user-page">
      <h2>Edit Employee</h2>
      <EmployeeForm
        employee={data}
        onSubmit={handleUpdateEmployee}
      />
    </div>
  )
}
