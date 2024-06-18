import { FC, memo } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { usePagination } from './hooks/usePagination'
import { PageSize } from './components/PageSize'
import './styles.css'

type PaginationProps = {
  count: number
}

export const Pagination: FC<PaginationProps> = memo(({ count }) => {
  const { pageNumber, totalPages, handleNextPage, handlePrevPage } =
    usePagination(count)

  return (
    <Box className="pagination">
      <PageSize />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'0 10px'}
      >
        <Button
          onClick={handlePrevPage}
          isDisabled={pageNumber === 1}
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
          {pageNumber} of {totalPages} pages
        </Text>
        <Button
          onClick={handleNextPage}
          isDisabled={pageNumber === totalPages}
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
