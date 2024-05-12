import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { PageFilter, RoleFilter, SearchBar } from './components'
import './Filters.css'

export const Filters: FC = () => {
  return (
    <Box className="filters">
      <PageFilter />
      <RoleFilter />
      <SearchBar />
    </Box>
  )
}
