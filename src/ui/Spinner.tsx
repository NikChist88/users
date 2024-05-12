import { Spinner as ChakraSpinner } from '@chakra-ui/react'

export const Spinner = () => {
  return (
    <ChakraSpinner
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      translateX={'-50%'}
      thickness="3px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  )
}
