import { FC, memo } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react'
import { useUsers } from '../hooks/useUsers'
import { UserType } from '@/types'

const roles: string[] = [
  'Subcontractor',
  'Engineer',
  'Electrician',
  'Supervisor',
  'Estimator',
  'Surveyor',
  'Architect',
  'Construction Manager',
  'Construction Expeditor',
  'Project Manager',
  'Construction Worker',
  'Construction Foreman',
]

type UserFormProps = {
  user: UserType
  onClose: () => void
}

export const UserForm: FC<UserFormProps> = memo(({ user, onClose }) => {
  const { register, handleSubmit, onSubmit } = useUsers(user, onClose)

  return (
    <>
      <FormControl>
        <FormLabel>User name:</FormLabel>
        <Input
          defaultValue={user?.name}
          {...register('name')}
          placeholder="User name..."
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          {...register('email')}
          defaultValue={user?.email}
          placeholder="Email..."
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Role:</FormLabel>
        <Select
          placeholder={user?.role || 'Select role...'}
          {...register('role')}
        >
          {roles.map((role, index) => (
            <option
              key={index}
              value={role}
            >
              {role}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Company:</FormLabel>
        <Input
          {...register('company')}
          placeholder="Company..."
          defaultValue={user?.company}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Country:</FormLabel>
        <Input
          {...register('country')}
          placeholder="Country..."
          defaultValue={user?.country}
        />
      </FormControl>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        marginTop={'20px'}
      >
        <Button
          colorScheme="blue"
          mr={3}
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Box>
    </>
  )
})
