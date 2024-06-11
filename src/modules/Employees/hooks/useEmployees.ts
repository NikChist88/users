import { Employee } from '@/types'
import { toast } from 'react-toastify'
import {
  useGetEmployeeByIdQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} from '@/api/employeesApi'
import { useNavigate, useParams } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'

export const useEmployees = (employee?: Employee) => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetEmployeeByIdQuery(id || '')
  const [addEmployee] = useAddEmployeeMutation()
  const [updateEmployee] = useUpdateEmployeeMutation()
  const [deleteEmployee] = useDeleteEmployeeMutation()
  const navigate = useNavigate()

  const handleUpdateEmployee: SubmitHandler<Employee> = async (
    submitData: Employee
  ) => {
    try {
      const updatedEmployee = {
        ...data,
        ...submitData,
      }

      await updateEmployee(updatedEmployee).unwrap()
      toast.success('Employee data updated!')
      navigate('/')
    } catch {
      toast.error('Some error occured!')
    }
  }

  const handleAddEmployee: SubmitHandler<Employee> = async (
    submitData: Employee
  ) => {
    try {
      await addEmployee(submitData).unwrap()
      toast.success('New Employee created!')
      navigate('/')
    } catch {
      toast.error('Some error occured!')
    }
  }

  const handleDeleteEmployee = async () => {
    if (window.confirm(`Delete Employee ${employee?.name}?`)) {
      try {
        employee && (await deleteEmployee(employee?.id).unwrap())
        toast.success(`Employee ${employee?.name} delete successfully!`)
      } catch (error) {
        alert(error)
      }
    }
  }

  return {
    handleDeleteEmployee,
    handleAddEmployee,
    handleUpdateEmployee,
    data,
    isLoading,
  }
}
