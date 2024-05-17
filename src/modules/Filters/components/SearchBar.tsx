import { ChangeEvent } from 'react'
import { Input } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectSearchQuery, setSearchQueryAC } from '../store/filterSlice'

export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(selectSearchQuery)

  const handleChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQueryAC(e.currentTarget.value))
  }

  return (
    <Input
      backgroundColor={'#ffffff'}
      placeholder="Search user by name..."
      value={searchQuery}
      onChange={handleChangeSearchQuery}
      height={'35px'}
    />
  )
}
