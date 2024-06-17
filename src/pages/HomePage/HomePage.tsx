import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filters, useFilters } from '@/modules/Filter'
import { EmployeesTable, useGetAllEmployeesQuery } from '@/modules/Employees'
import { selectUser } from '@/modules/Auth'
import { useAppSelector } from '@/store'
import { Spinner } from '@/ui/Spinner'

export const HomePage = () => {
  const { data = [], isLoading } = useGetAllEmployeesQuery()
  const user = useAppSelector(selectUser)
  const { filteredEmployees } = useFilters(data)
  const userEmployees = filteredEmployees.filter((e) => e.userId === user!.id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user, navigate])

  if (isLoading) return <Spinner />

  return (
    <>
      <Filters />
      <EmployeesTable employees={userEmployees} />
    </>
  )
}
