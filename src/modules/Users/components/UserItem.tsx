import { FC, memo } from 'react'
import { Tr, Td, Box, Text, IconButton } from '@chakra-ui/react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { UserModal } from './UserModal'
import { useUsers } from '../hooks/useUsers'
import { User } from '@/types'
import { getInitials } from '../helpers/getInitials'

type UserItemProps = {
  user: User
}

export const UserItem: FC<UserItemProps> = memo(({ user }) => {
  const { handleDeleteUser } = useUsers(user)
  const initials = getInitials(user.name)

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
            <Text>{user.name}</Text>
            <Text fontSize={'xs'}>{user.email}</Text>
          </Box>
        </Box>
      </Td>
      <Td>{user.email}</Td>
      <Td>{user.role}</Td>
      <Td>{user.company}</Td>
      <Td>{user.country}</Td>
      <Td>
        <Box
          display={'flex'}
          gap={'0 10px'}
        >
          <UserModal
            user={user}
            isEditMode
          />
          <IconButton
            aria-label="delete"
            title="Delete User"
            size={'xs'}
            backgroundColor={'transparent'}
            icon={
              <RiDeleteBinLine
                size={'16px'}
                cursor={'pointer'}
                color="#E21F0B"
                onClick={handleDeleteUser}
              />
            }
          />
        </Box>
      </Td>
    </Tr>
  )
})
