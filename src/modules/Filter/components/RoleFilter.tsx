import { ChangeEvent, FC } from 'react'
import { RolesSelect } from '@/components/RolesSelect/RolesSelect'
import { useAppDispatch, useAppSelector } from '@/store'
import { roleFilter, setRoleFilter } from '../store/filterSlice'
import { Box } from '@chakra-ui/react'

export const RoleFilter: FC = () => {
  const dispatch = useAppDispatch()
  const role = useAppSelector(roleFilter)

  const handleChangeRoleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRoleFilter(e.currentTarget.value))
  }

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      columnGap={'5px'}
    >
      <span>Filter by role:</span>
      <RolesSelect
        width={'220px'}
        height={'35px'}
        placeholder={'All'}
        value={role}
        onChange={handleChangeRoleFilter}
      />
    </Box>
  )
}
