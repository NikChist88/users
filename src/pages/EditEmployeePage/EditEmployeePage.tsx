import { EmployeeForm } from '@/modules/Employees/components'
import { useEmployees, useGetByIdQuery } from '@/modules/Employees'
import { Spinner } from '@/ui/Spinner'
import { useParams } from 'react-router-dom'
import './styles.css'

export const EditEmployeePage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetByIdQuery(id || '')
  const { handleUpdateEmployee } = useEmployees(data)

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
