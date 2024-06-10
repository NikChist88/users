import { ChangeEvent } from 'react'
import { Input, Box, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { searchQuery, setSearchQuery } from '../store/filterSlice'

export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const search = useAppSelector(searchQuery)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.currentTarget.value))
  }

  return (
    <Box
      width={'100%'}
      display={'flex'}
      alignItems={'center'}
    >
      <Text
        fontSize={'14px'}
        flex={'1 0 105px'}
      >
        Filter by name:
      </Text>
      <Input
        backgroundColor={'#ffffff'}
        placeholder="Search user by name..."
        value={search}
        onChange={handleOnChange}
        height={'35px'}
      />
    </Box>
  )
}
