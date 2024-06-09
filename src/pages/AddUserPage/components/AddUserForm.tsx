import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { User } from '@/types'
import { useAddUserMutation } from '@/api/usersApi'
import { toast } from 'react-toastify'

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

export const AddUserForm = () => {
  const [addUser] = useAddUserMutation()
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: '',
      name: '',
      email: '',
      role: '',
      company: '',
      country: '',
    },
  })

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      await addUser(data).unwrap()
      reset()
      toast.success('User added!')
      navigate('/')
    } catch (error) {
      alert(error)
      reset()
    }
  }

  return (
    <>
      <FormControl>
        <FormLabel>User name:</FormLabel>
        <Input
          defaultValue={''}
          placeholder="User name..."
          bgColor={'#EEEFF1'}
          {...register('name')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          defaultValue={value}
          type="email"
          placeholder="Email..."
          bgColor={'#EEEFF1'}
          {...register('email')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Role:</FormLabel>
        <Select
          placeholder={'Select role...'}
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
          defaultValue={value}
          placeholder="Company..."
          bgColor={'#EEEFF1'}
          {...register('company')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Country:</FormLabel>
        <Input
          defaultValue={value}
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
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
          <Button
            backgroundColor={'#00274A'}
            _hover={{ backgroundColor: '#013058' }}
            color={'#fff'}
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </>
  )
}
