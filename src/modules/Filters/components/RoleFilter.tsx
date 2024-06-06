import { ChangeEvent, FC } from 'react'
import { Select, Box, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectRoleFilter, setRoleFilterAC } from '../store/filterSlice'

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
  'Actor',
]

export const RoleFilter: FC = () => {
  const dispatch = useAppDispatch()
  const roleFilter = useAppSelector(selectRoleFilter)

  const handleChangeRoleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRoleFilterAC(e.currentTarget.value))
  }

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
    >
      <Text
        flex={'1 0 90px'}
        fontSize={'14px'}
      >
        Filter by role:
      </Text>
      <Select
        width={'300px'}
        height={'35px'}
        placeholder="All"
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
    </Box>
  )
}
