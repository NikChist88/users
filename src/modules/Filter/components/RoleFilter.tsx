import { ChangeEvent, FC } from 'react'
import { RolesSelect } from '@/components/RolesSelect/RolesSelect'
import { useAppDispatch, useAppSelector } from '@/store'
import { roleFilter, setRoleFilter } from '../store/filterSlice'

export const RoleFilter: FC = () => {
  const dispatch = useAppDispatch()
  const role = useAppSelector(roleFilter)

  const handleChangeRoleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRoleFilter(e.currentTarget.value))
  }

  return (
    <RolesSelect
      width={'220px'}
      height={'35px'}
      placeholder={'All'}
      value={role}
      onChange={handleChangeRoleFilter}
    />
  )
}
