import { FC, memo } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { usePagination } from './hooks/usePagination'
import './styles.css'

type PaginationProps = {
  totalPages: number
}

export const Pagination: FC<PaginationProps> = memo(({ totalPages }) => {
  const { page, handleNextPage, handlePrevPage } = usePagination()

  return (
    <Box className="pagination">
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'0 10px'}
      >
        <Button
          onClick={handlePrevPage}
          isDisabled={page === 0}
          size={'sm'}
          colorScheme="blue"
          fontSize={'12px'}
        >
          Prev
        </Button>
        <Text
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          color={'#000000'}
        >
          {page + 1} of {totalPages} pages
        </Text>
        <Button
          onClick={handleNextPage}
          isDisabled={page === totalPages - 1}
          size={'sm'}
          colorScheme="blue"
          fontSize={'12px'}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
})
