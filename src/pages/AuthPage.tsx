import { useEffect } from 'react'
import { Auth } from '@/modules/Auth'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import { selectUser } from '@/modules/Auth'

export const AuthPage = () => {
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return <Auth />
}
