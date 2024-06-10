import { FC } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { User } from '@/types'

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
  user?: User
  onSubmit: (values: User) => void
}

export const UserForm: FC<UserFormProps> = ({ user, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: user?.id || '',
      name: user?.name || '',
      email: user?.email || '',
      role: user?.role || '',
      company: user?.company || '',
      country: user?.country || '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>User name:</FormLabel>
        <Input
          defaultValue={user?.name || ''}
          placeholder="User name..."
          bgColor={'#EEEFF1'}
          {...register('name')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          defaultValue={user?.email || ''}
          type="email"
          placeholder="Email..."
          bgColor={'#EEEFF1'}
          {...register('email')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Role:</FormLabel>
        <Select
          placeholder={user?.role || 'Select role...'}
          bgColor={'#EEEFF1'}
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
          defaultValue={user?.company}
          placeholder="Company..."
          bgColor={'#EEEFF1'}
          {...register('company')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Country:</FormLabel>
        <Input
          defaultValue={user?.country}
          placeholder="Country..."
          bgColor={'#EEEFF1'}
          {...register('country')}
        />
      </FormControl>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        marginTop={'20px'}
      >
        <Button
          backgroundColor={'#00274A'}
          _hover={{ backgroundColor: '#013058' }}
          color={'#fff'}
          onClick={() => reset()}
        >
          Reset Form
        </Button>
        <div>
          <Button
            backgroundColor={'#FFA42F'}
            _hover={{ backgroundColor: '#e0912a' }}
            color={'#fff'}
            mr={3}
            type="submit"
          >
            Save
          </Button>
          <Link to={'/'}>
            <Button
              backgroundColor={'#00274A'}
              _hover={{ backgroundColor: '#013058' }}
              color={'#fff'}
            >
              Cancel
            </Button>
          </Link>
        </div>
      </Box>
    </form>
  )
}
