import { ChangeEvent } from 'react'
import { Box, Select, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { limitFilter, setLimitFilter } from '../store/filterSlice'

export const PageFilter = () => {
  const dispatch = useAppDispatch()
  const limit = useAppSelector(limitFilter)

  const handleChangePageFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimitFilter(+e.currentTarget.value))
  }

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      columnGap={'5px'}
      height={'35px'}
    >
      <Text fontSize={'14px'}>Show:</Text>
      <Select
        width={'80px'}
        height={'35px'}
        defaultValue={limit}
        onChange={handleChangePageFilter}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </Select>
    </Box>
  )
}
