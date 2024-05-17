import { ChangeEvent, FC } from 'react'
import { Select } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectRoleFilter, setRoleFilterAC } from '../store/filterSlice'
import '../Filters.css'

const roles: string[] = [
  'Subcontractor',
  'Engineer',
  'Electrician',
  'Supervisor',
  'Estimator',
  'Surveyor',
  'Architect',
  'Construction Manager',
  'Construction Expeditor',
  'Project Manager',
  'Construction Worker',
  'Construction Foreman',
]

export const RoleFilter: FC = () => {
  const dispatch = useAppDispatch()
  const roleFilter = useAppSelector(selectRoleFilter)

  const handleChangeRoleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRoleFilterAC(e.currentTarget.value))
  }

  return (
    <Select
      maxWidth={'300px'}
      height={'35px'}
      placeholder="Filter by roles..."
      defaultValue={roleFilter}
      onChange={handleChangeRoleFilter}
    >
      {roles.map((role, index) => (
        <option
          key={index}
          value={role}
        >
          {role}
        </option>
      ))}
    </Select>
  )
}
