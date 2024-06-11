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
import { Employee } from '@/types'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { tableHeaders } from './constans/tableHeaders'
import './styles.css'

type EmployeesPropsType = {
  employees: Employee[]
}

export const Employees: FC<EmployeesPropsType> = memo(({ employees }) => {
  const navigate = useNavigate()

  return (
    <TableContainer className="tableContainer">
      <Box
        display={'flex'}
        justifyContent={'end'}
        marginBottom={'15px'}
      >
        <Button
          width={'100%'}
          maxWidth={'150px'}
          colorScheme="blue"
          leftIcon={<IoMdAdd size={'18px'} />}
          height={'35px'}
          fontSize={'14px'}
          onClick={() => navigate('/add')}
        >
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
          {employees.map((employee) => (
            <EmployeeItem
              key={employee.id}
              employee={employee}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
})
