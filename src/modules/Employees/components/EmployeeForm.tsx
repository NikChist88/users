import { FC } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
  Textarea,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Employees } from '@prisma/index'
import { roles } from '@/components/RolesSelect/constants/roles'
import { Response } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { fields } from '../constants/fields'

type EmployeeForm = {
  employee?: Employees
  user?: Response
  onSubmit: (values: Employees) => void
}

export const EmployeeForm: FC<EmployeeForm> = ({
  employee,
  user,
  onSubmit,
}) => {
  const { pathname } = useLocation()
  const { register, handleSubmit, reset } = useForm<Employees>({
    defaultValues: {
      id: employee?.id || uuidv4(),
      firstName: employee?.firstName || '',
      lastName: employee?.lastName || '',
      gender: employee?.gender || '',
      dateOfBirth: employee?.dateOfBirth || '',
      email: employee?.email || '',
      phone: employee?.phone || '',
      role: employee?.role || '',
      address: employee?.address || '',
      company: employee?.company || '',
      country: employee?.country || '',
      aboutMe: employee?.aboutMe || '',
      userId: employee?.userId || user?.id,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display={'flex'}
        columnGap={'15px'}
        flexWrap={'wrap'}
      >
        {fields.map((field, key) => (
          <FormControl
            key={key}
            className="form-control"
          >
            <FormLabel>{field.label}:</FormLabel>
            <Input
              placeholder={`${field.label}...`}
              {...register(`${field.register}`, {
                required: true,
                maxLength: 80,
              })}
            />
          </FormControl>
        ))}
      </Box>
      <Box
        display={'flex'}
        gap={'15px'}
      >
        <FormControl className="form-control">
          <FormLabel>Gender:</FormLabel>
          <Select
            placeholder={employee?.gender || 'Select gender...'}
            bgColor={'#EEEFF1'}
            {...register('gender')}
          >
            <option value={'Male'}>Male</option>
            <option value={'Female'}>Female</option>
          </Select>
        </FormControl>
        <FormControl className="form-control">
          <FormLabel>Role:</FormLabel>
          <Select
            placeholder={employee?.role || 'Select role...'}
            bgColor={'#EEEFF1'}
            {...register('role')}
          >
            {roles.map((role, key) => (
              <option
                key={key}
                value={role}
              >
                {role}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl
          width={'665px'}
          height={'150px'}
          mb={8}
        >
          <FormLabel>About Me:</FormLabel>
          <Textarea
            resize={'none'}
            height={'100%'}
            bgColor={'#EEEFF1'}
            {...register('aboutMe')}
          />
        </FormControl>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        marginTop={'20px'}
      >
        <div>
          <Button
            colorScheme="blue"
            mr={3}
            type="submit"
          >
            Save
          </Button>
          <Link to={pathname === '/add' ? '/' : `/employee/${employee?.id}`}>
            <Button>Back</Button>
          </Link>
        </div>
        <Button onClick={() => reset()}>Reset Form</Button>
      </Box>
    </form>
  )
}
