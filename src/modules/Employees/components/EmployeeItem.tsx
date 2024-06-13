import { FC, memo } from 'react'
import { Tr, Td, Box, Text, IconButton } from '@chakra-ui/react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useEmployees } from '../hooks/useEmployees'
import { Employees } from '@prisma/index'
import { getInitials } from '../helpers/getInitials'
import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

type EmployeeItem = {
  employee: Employees
}

export const EmployeeItem: FC<EmployeeItem> = memo(({ employee }) => {
  const { handleDeleteEmployee } = useEmployees(employee)
  const navigate = useNavigate()
  const initials = getInitials(`${employee.firstName} ${employee.lastName}`)

  return (
    <Tr>
      <Td padding={'8px 16px'}>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'0 10px'}
        >
          <Text className="initials">{initials}</Text>
          <Box
            display={'flex'}
            flexDirection={'column'}
          >
            <Text>{`${employee.firstName} ${employee.lastName}`}</Text>
            <Text fontSize={'xs'}>{employee.phone}</Text>
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
          <IconButton
            size={'xs'}
            title="Edit Employee"
            aria-label="edit"
            backgroundColor={'transparent'}
            onClick={() => navigate(`/edit/${employee.id}`)}
            icon={
              <FaRegEdit
                size={'16px'}
                cursor={'pointer'}
                color="#1C84CA"
              />
            }
          />
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
