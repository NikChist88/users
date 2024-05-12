import { FC } from 'react'
import { Tr, Td, Box, Text, IconButton } from '@chakra-ui/react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { UserModal } from './UserModal'
import { useUsers } from '../hooks/useUsers'
import { UserType } from '@/types'
import { getInitials } from '@/helpers/getInitials'

type UserPropsType = {
  user: UserType
}

export const User: FC<UserPropsType> = ({ user }) => {
  const { id, name, email, role, company, country } = user
  const { handleDeleteUser } = useUsers(id, name)
  const initials = getInitials(name)

  return (
    <Tr>
      <Td>{id}</Td>
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
            <Text>{name}</Text>
            <Text fontSize={'xs'}>{email}</Text>
          </Box>
        </Box>
      </Td>
      <Td>{role}</Td>
      <Td>{company}</Td>
      <Td>{country}</Td>
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
}
