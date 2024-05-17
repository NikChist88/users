import { ChangeEvent } from 'react'
import { Box, Text, Select } from '@chakra-ui/react'
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
      display={'flex'}
      alignItems={'center'}
      gap={'0 5px'}
      height={'35px'}
      maxWidth={'180px'}
      width={'100%'}
    >
      <Text>Show</Text>
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
      <Text>entries</Text>
    </Box>
  )
}
