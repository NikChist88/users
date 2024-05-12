import { Input } from '@chakra-ui/react'
import { useFilters } from '../hooks/useFilters'

export const SearchBar = () => {
  const { searchQuery, handleChangeSearchQuery } = useFilters()

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
