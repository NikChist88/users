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
import { UserItem } from './components'
import { User as UserType } from '@/types'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const tableHeaders: string[] = [
  'user',
  'email',
  'role',
  'company',
  'location',
  'actions',
]

type UsersPropsType = {
  users: UserType[][]
  currentPage: number
}

export const Users: FC<UsersPropsType> = memo(({ users, currentPage }) => {
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
          Add New User
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
          {users[currentPage]?.map((user) => (
            <UserItem
              key={user.id}
              user={user}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
})
