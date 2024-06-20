import { useEffect } from 'react'
import { EmployeeForm } from '@/modules/Employees/components'
import { useEmployees } from '@/modules/Employees'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export const AddEmployeePage = () => {
  const user = useAppSelector(selectUser)
  const { handleAddEmployee } = useEmployees(user!.employeesCount)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user])

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
