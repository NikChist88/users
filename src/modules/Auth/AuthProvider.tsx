import { useCurrentQuery } from '@/api/authApi'
import { Spinner } from '@/ui/Spinner'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery()

  if (isLoading) {
    return <Spinner />
  }

  return children
}
