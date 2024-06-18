import { FC, memo } from 'react'
import { Tr, Td, Box, Text, IconButton } from '@chakra-ui/react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useEmployees } from '../hooks/useEmployees'
import { Employees } from '@prisma/index'
import { getInitials } from '../helpers/getInitials'
import { useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'

type EmployeeItem = {
  employee: Employees
}

export const EmployeeItem: FC<EmployeeItem> = memo(({ employee }) => {
  const { id, firstName, lastName, email, phone, role, company, country } =
    employee
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
            <Text>{`${firstName} ${lastName}`}</Text>
            <Text fontSize={'xs'}>{phone}</Text>
          </Box>
        </Box>
      </Td>
      <Td>{email}</Td>
      <Td>{role}</Td>
      <Td>{company}</Td>
      <Td>{country}</Td>
      <Td>
        <Box
          display={'flex'}
          gap={'0 10px'}
        >
          <IconButton
            size={'xs'}
            title="Employee Details"
            aria-label="details"
            bgColor={'transparent'}
            onClick={() => navigate(`/employee/${id}`)}
            icon={
              <FaEye
                size={'18px'}
                color="#1C84CA"
              />
            }
          />
          <IconButton
            aria-label="delete"
            title="Delete Employee"
            size={'xs'}
            bgColor={'transparent'}
            onClick={handleDeleteEmployee}
            icon={
              <RiDeleteBinLine
                size={'16px'}
                color="red"
              />
            }
          />
        </Box>
      </Td>
    </Tr>
  )
})
