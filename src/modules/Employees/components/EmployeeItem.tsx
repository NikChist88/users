import { FC, memo } from 'react'
import { Tr, Td, Box, Text, IconButton } from '@chakra-ui/react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useEmployees } from '../hooks/useEmployees'
import { Employee } from '@/types'
import { getInitials } from '../helpers/getInitials'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type EmployeeItemProps = {
  employee: Employee
}

export const EmployeeItem: FC<EmployeeItemProps> = memo(({ employee }) => {
  const { handleDeleteEmployee } = useEmployees(employee)
  const initials = getInitials(employee.name)

  return (
    <Tr>
      <Td padding={'8px 16px'}>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'0 10px'}
        >
          <Text
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            height={'35px'}
            width={'35px'}
            color={'#FFF'}
            backgroundColor={'#1C84CA'}
            borderRadius={'50%'}
          >
            {initials}
          </Text>
          <Box
            display={'flex'}
            flexDirection={'column'}
          >
            <Text>{employee.name}</Text>
            <Text fontSize={'xs'}>{employee.email}</Text>
          </Box>
        </Box>
      </Td>
      <Td>{employee.email}</Td>
      <Td>{employee.role}</Td>
      <Td>{employee.company}</Td>
      <Td>{employee.country}</Td>
      <Td>
        <Box
          display={'flex'}
          gap={'0 10px'}
        >
          <Link to={`/edit/${employee.id}`}>
            <IconButton
              size={'xs'}
              title="Edit Employee"
              aria-label="edit"
              backgroundColor={'transparent'}
              icon={
                <FaRegEdit
                  size={'16px'}
                  cursor={'pointer'}
                  color="#1C84CA"
                />
              }
            />
          </Link>
          <IconButton
            aria-label="delete"
            title="Delete Employee"
            size={'xs'}
            backgroundColor={'transparent'}
            icon={
              <RiDeleteBinLine
                size={'16px'}
                cursor={'pointer'}
                color="#E21F0B"
                onClick={handleDeleteEmployee}
              />
            }
          />
        </Box>
      </Td>
    </Tr>
  )
})
