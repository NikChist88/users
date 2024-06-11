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
import { Employee, Response } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { roles } from '../constans/roles'

type EmployeeFormProps = {
  employee?: Employee
  user?: Response
  onSubmit: (values: Employee) => void
}

export const EmployeeForm: FC<EmployeeFormProps> = ({
  employee,
  user,
  onSubmit,
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: employee?.id || uuidv4(),
      name: employee?.name || '',
      email: employee?.email || '',
      role: employee?.role || '',
      company: employee?.company || '',
      country: employee?.country || '',
      userId: employee?.userId || user?.id,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Employee name:</FormLabel>
        <Input
          defaultValue={employee?.name || ''}
          placeholder="Employee name..."
          bgColor={'#EEEFF1'}
          {...register('name')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          defaultValue={employee?.email || ''}
          type="email"
          placeholder="Email..."
          bgColor={'#EEEFF1'}
          {...register('email')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Role:</FormLabel>
        <Select
          placeholder={employee?.role || 'Select role...'}
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
          defaultValue={employee?.company}
          placeholder="Company..."
          bgColor={'#EEEFF1'}
          {...register('company')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Country:</FormLabel>
        <Input
          defaultValue={employee?.country}
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
