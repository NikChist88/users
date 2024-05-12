import { FC } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { usePagination } from './hooks/usePagination'

type PaginationProps = {
  items: number
  totalPages: number
}

export const Pagination: FC<PaginationProps> = ({ items, totalPages }) => {
  const { currentPage, handleNextPage, handlePrevPage } = usePagination()

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={'0 10px'}
      fontSize={'14px'}
      paddingTop={'15px'}
    >
      <Text
        backgroundColor={'#1C84CA'}
        color={'#fff'}
        padding={'5px 10px'}
        borderRadius={'5px'}
        fontWeight={500}
      >
        Total entries: {items}
      </Text>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'0 10px'}
      >
        <Button
          onClick={handlePrevPage}
          isDisabled={currentPage === 0}
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
          {currentPage + 1} of {totalPages} pages
        </Text>
        <Button
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages - 1}
          size={'sm'}
          colorScheme="blue"
          fontSize={'12px'}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}
