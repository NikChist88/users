import { FC, memo } from 'react'
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Box,
  Button,
} from '@chakra-ui/react'
import { EmployeeItem } from './components'
import { Employees } from '@prisma/index'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { tableHeaders } from './constants/tableHeaders'
import './styles.css'

type EmployeesTable = {
  employees: Employees[]
}

export const EmployeesTable: FC<EmployeesTable> = memo(({ employees }) => {
  const navigate = useNavigate()

  return (
    <TableContainer className="tableContainer">
      <Box
        display={'flex'}
        justifyContent={'end'}
        marginBottom={'15px'}
      >
        <Button
          display={'flex'}
          alignItems={'center'}
          columnGap={'5px'}
          width={'150px'}
          colorScheme="blue"
          height={'35px'}
          fontSize={'14px'}
          onClick={() => navigate('/add')}
        >
          <IoMdAdd size={18} />
          Add Employee
        </Button>
      </Box>
      <Table
        size="md"
        colorScheme="telegram"
      >
        <Thead bgColor={'#2883CC'}>
          <Tr>
            {tableHeaders.map((title, index) => (
              <Th
                key={index}
                color={'#fff'}
              >
                {title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {employees?.map((employee) => (
            <EmployeeItem
              key={employee.id}
              employee={employee}
            />
          ))}
        </Tbody>
      </Table>
      <span>Total employees: {employees.length}</span>
    </TableContainer>
  )
})
