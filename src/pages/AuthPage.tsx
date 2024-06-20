import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import { Auth, selectIsAuthenticated } from '@/modules/Auth'

export const AuthPage = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  return <Auth />
}
