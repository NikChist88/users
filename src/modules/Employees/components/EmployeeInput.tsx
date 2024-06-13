import { FC } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { UseFormRegister } from 'react-hook-form'
import { Employees } from '@prisma/index'

type EmployeeInput = {
  label: string
  type?: string
  register: UseFormRegister<Employees>
}

export const EmployeeInput: FC<EmployeeInput> = ({ label, type, register }) => {
  return (
    <FormControl
      maxW={'326px'}
      width={'100%'}
      mt={4}
    >
      <FormLabel>{label}:</FormLabel>
      <Input
        type={type}
        placeholder={`${label}...`}
        bgColor={'#EEEFF1'}
        {...register('address')}
      />
    </FormControl>
  )
}
