import { ChangeEvent } from 'react'
import { Box, Select, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectLimitFilter, setLimitFilter } from '../store/filterSlice'

export const PageFilter = () => {
  const dispatch = useAppDispatch()
  const limitFilter = useAppSelector(selectLimitFilter)

  const handleChangePageFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimitFilter(+e.currentTarget.value))
  }

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      height={'35px'}
    >
      <Text
        flex={'0 0 70px'}
        fontSize={'14px'}
      >
        Per page:
      </Text>
      <Select
        width={'130px'}
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
