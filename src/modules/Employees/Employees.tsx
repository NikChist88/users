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
import './styles.css'

const tableHeaders: string[] = [
  'employee',
  'email',
  'role',
  'company',
  'location',
  'actions',
]

type EmployeesPropsType = {
  employees: Employee[][]
  currentPage: number
}

export const Employees: FC<EmployeesPropsType> = memo(
  ({ employees, currentPage }) => {
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
            {employees[currentPage]?.map((employee) => (
              <EmployeeItem
                key={employee.id}
                employee={employee}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    )
  }
)
