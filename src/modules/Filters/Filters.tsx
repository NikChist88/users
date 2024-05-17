import { FC, memo } from 'react'
import { Box } from '@chakra-ui/react'
import { PageFilter, RoleFilter, SearchBar } from './components'
import './Filters.css'

export const Filters: FC = memo(() => {
  return (
    <Box className="filters">
      <PageFilter />
      <RoleFilter />
      <SearchBar />
    </Box>
  )
})
