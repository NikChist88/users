import { FC } from 'react'
import { Select } from '@chakra-ui/react'
import { useFilters } from '../hooks/useFilters'
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
  const { roleFilter, handleChangeRoleFilter } = useFilters()

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
