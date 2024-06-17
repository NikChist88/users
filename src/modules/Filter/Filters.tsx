import { FC, memo } from 'react'
import { Box } from '@chakra-ui/react'
import { RoleFilter, SearchBar } from './components'
import './styles.css'

export const Filters: FC = memo(() => {
  return (
    <Box className="filters">
      <RoleFilter />
      <SearchBar />
    </Box>
  )
})
