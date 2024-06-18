import { ChangeEvent } from 'react'
import { Box, Select, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectPageSize, setPageSize } from '../store/paginateSlice'

export const PageSize = () => {
  const dispatch = useAppDispatch()
  const pageSize = useAppSelector(selectPageSize)

  const handleChangePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(+e.currentTarget.value))
  }

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      columnGap={'5px'}
      height={'35px'}
    >
      <Text fontSize={'14px'}>Show on page:</Text>
      <Select
        width={'80px'}
        height={'35px'}
        defaultValue={pageSize}
        onChange={handleChangePageSize}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </Select>
    </Box>
  )
}
