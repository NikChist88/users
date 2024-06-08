import { AuthForm, selectUser, selectIsAuthenticated } from '@/modules/Auth'
import { useAppSelector } from '@/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthPage = () => {
  const user = useAppSelector(selectUser)
  const authenticated = useAppSelector(selectIsAuthenticated)
  const navigate = useNavigate()
  console.log('user: ', user)
  console.log('authenticated: ', authenticated)

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return <AuthForm />
}
