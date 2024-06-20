import { FC, memo } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { usePagination } from './hooks/usePagination'
import { PageSize } from './components/PageSize'
import './styles.css'

type PaginationProps = {
  allEntries: number
}

export const Pagination: FC<PaginationProps> = memo(({ allEntries }) => {
  const { pageNumber, totalPages, changePage } = usePagination(allEntries)

  return (
    <Box className="pagination">
      <PageSize allEntries={allEntries!} />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'0 10px'}
      >
        <Button
          onClick={() => changePage(pageNumber - 1)}
          isDisabled={pageNumber === 1}
          size={'sm'}
          colorScheme="blue"
          fontSize={'12px'}
        >
          Prev
        </Button>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            borderRadius={'50%'}
            colorScheme="teal"
            key={i}
            size={'sm'}
            onClick={() => changePage(i + 1)}
            isDisabled={pageNumber === i + 1}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          onClick={() => changePage(pageNumber + 1)}
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
