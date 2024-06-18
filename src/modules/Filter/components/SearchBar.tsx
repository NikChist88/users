import { ChangeEvent } from 'react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from '@chakra-ui/react'
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
      columnGap={'10px'}
      alignItems={'center'}
      marginLeft={'auto'}
      width={'450px'}
    >
      <Input
        backgroundColor={'#ffffff'}
        placeholder="Search employees by name..."
        value={search}
        onChange={handleOnChange}
        height={'35px'}
      />
      <IconButton
        aria-label="search"
        icon={<IoIosSearch size={20} />}
        height={'35px'}
        colorScheme="blue"
      />
    </InputGroup>
  )
}
