import { ChangeEvent } from 'react'
import { Box, Select } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectLimitFilter, setLimitFilterAC } from '../store/filterSlice'

export const PageFilter = () => {
  const dispatch = useAppDispatch()
  const limitFilter = useAppSelector(selectLimitFilter)

  const handleChangePageFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimitFilterAC(+e.currentTarget.value))
  }

  return (
    <Box
      width={'100px'}
      height={'35px'}
    >
      <Select
        maxWidth={'100px'}
        height={'35px'}
        defaultValue={limitFilter}
        onChange={handleChangePageFilter}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </Select>
    </Box>
  )
}
