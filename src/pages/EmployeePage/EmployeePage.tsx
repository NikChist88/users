import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'
import { useEmployees, useGetByIdQuery } from '@/modules/Employees'
import { Spinner } from '@/ui/Spinner'
import { titles } from './constants/titles'
import './styles.css'

export const EmployeePage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetByIdQuery(id || '')
  const { handleDeleteEmployee } = useEmployees(data)
  const navigate = useNavigate()
  const values: string[] = data && Object.values(data).slice(3, -2)

  if (isLoading) return <Spinner />

  return (
    <div className="about">
      <h3 className="about-title">About Me</h3>
      <div className="about-body">
        <div className="about-image">
          <img
            src={data.gender === 'Male' ? '/men.png' : '/women.png'}
            alt="Emplopyee Image"
          />
        </div>
        <div className="about-info">
          <h4>
            {data.firstName} {data.lastName}
          </h4>
          <p>
            {data.aboutMe === ''
              ? `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            explicabo quas obcaecati iusto? Cumque corporis aut nemo, saepe esse
            excepturi quae perferendis error nobis ab assumenda iure iste
            impedit hic!`
              : data.aboutMe}
          </p>
          <ul className="about-list">
            <li>
              {titles.map((title, key) => (
                <span key={key}>{title}:</span>
              ))}
            </li>
            <li>
              {values.map((value, key) => (
                <span key={key}>{value}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <Box
        display={'flex'}
        columnGap={'15px'}
      >
        <Button
          colorScheme="blue"
          size={'sm'}
          onClick={() => navigate(`/edit/${data.id}`)}
        >
          Edit
        </Button>
        <Button
          colorScheme="red"
          size={'sm'}
          onClick={handleDeleteEmployee}
        >
          Delete
        </Button>
        <Button
          size={'sm'}
          onClick={() => navigate('/')}
        >
          Back
        </Button>
      </Box>
    </div>
  )
}
