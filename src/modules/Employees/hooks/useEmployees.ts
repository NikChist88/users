import { Employees } from '@prisma/index'
import { toast } from 'react-toastify'
import {
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
} from '../api/employeesApi'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'

export const useEmployees = (employee?: Employees) => {
  const [addEmployee] = useCreateMutation()
  const [updateEmployee] = useUpdateMutation()
  const [deleteEmployee] = useDeleteMutation()
  const navigate = useNavigate()

  const handleAddEmployee: SubmitHandler<Employees> = async (
    submitData: Employees
  ) => {
    try {
      await addEmployee(submitData).unwrap()
      toast.success('New Employee created!')
      navigate('/')
    } catch {
      toast.error('Failed to create employee!')
    }
  }

  const handleUpdateEmployee: SubmitHandler<Employees> = async (
    submitData: Employees
  ) => {
    try {
      const updatedEmployee = {
        ...employee,
        ...submitData,
      }
      await updateEmployee(updatedEmployee).unwrap()
      toast.success('Employee data updated!')
      navigate('/')
    } catch {
      toast.error('Failed to update employee!!')
    }
  }

  const handleDeleteEmployee = async () => {
    try {
      if (
        window.confirm(
          `Delete Employee ${employee?.firstName} ${employee?.lastName}?`
        )
      ) {
        employee && (await deleteEmployee(employee?.id).unwrap())
        toast.success(
          `Employee ${employee?.firstName} ${employee?.lastName} delete successfully!`
        )
        navigate('/')
      }
    } catch {
      toast.error('Employee not deleted!')
    }
  }

  return {
    handleAddEmployee,
    handleUpdateEmployee,
    handleDeleteEmployee,
  }
}
