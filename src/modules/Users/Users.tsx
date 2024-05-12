import { FC } from 'react'
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Box,
} from '@chakra-ui/react'
import { User, UserModal } from './components'
import { UserType } from '@/types'

const titles: string[] = [
  'uuid',
  'user',
  'role',
  'company',
  'location',
  'actions',
]

type UsersPropsType = {
  users: UserType[][]
  currentPage: number
}

export const Users: FC<UsersPropsType> = ({ users, currentPage }) => {
  return (
    <TableContainer
      width={'100%'}
      backgroundColor={'#ffffff'}
      borderRadius={'5px'}
      padding={'15px'}
    >
      <Box
        display={'flex'}
        justifyContent={'end'}
        marginBottom={'15px'}
      >
        <UserModal isEditMode={false} />
      </Box>
      <Table
        size="md"
        colorScheme="telegram"
      >
        <Thead bgColor={'#2883CC'}>
          <Tr>
            {titles.map((title, index) => (
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
            <User
              key={user.id}
              user={user}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
