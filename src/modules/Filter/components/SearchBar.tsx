import { ChangeEvent } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { searchQuery, setSearchQuery } from '../store/filterSlice'
import { IoIosSearch } from 'react-icons/io'

export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const search = useAppSelector(searchQuery)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.currentTarget.value))
  }

  return (
    <InputGroup
      display={'flex'}
      alignItems={'center'}
      marginLeft={'auto'}
      width={'450px'}
    >
      <InputLeftElement pointerEvents="none">
        <IoIosSearch size={18} />
      </InputLeftElement>
      <Input
        backgroundColor={'#ffffff'}
        placeholder="Search user by name..."
        value={search}
        onChange={handleOnChange}
        height={'35px'}
      />
    </InputGroup>
  )
}
