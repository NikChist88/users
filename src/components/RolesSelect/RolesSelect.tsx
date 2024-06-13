import { ChangeEvent, FC } from 'react'
import { Select } from '@chakra-ui/react'
import { roles } from './constants/roles'

type RolesSelect = {
  width?: string
  height?: string
  placeholder?: string
  value?: string
  bgColor?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const RolesSelect: FC<RolesSelect> = ({
  width,
  height,
  placeholder,
  value,
  bgColor,
  onChange,
}) => {
  return (
    <Select
      width={width}
      height={height}
      placeholder={placeholder}
      defaultValue={value}
      bgColor={bgColor}
      onChange={onChange}
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
  )
}
