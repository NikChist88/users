import { ChangeEvent } from 'react'
import { Input, InputGroup } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectSearchQuery, setSearchQuery } from '../store/filterSlice'

export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(selectSearchQuery)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.currentTarget.value))
  }

  return (
    <InputGroup
      display={'flex'}
      columnGap={'10px'}
      alignItems={'center'}
      marginLeft={'auto'}
      width={'450px'}
    >
      <Input
        backgroundColor={'#ffffff'}
        placeholder="Search employees by name..."
        value={searchQuery}
        onChange={handleOnChange}
        height={'35px'}
      />
    </InputGroup>
  )
}
