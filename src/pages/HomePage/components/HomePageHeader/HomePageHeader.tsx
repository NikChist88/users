import { IconButton } from '@chakra-ui/react'
import { MdLogout } from 'react-icons/md'
import { logout, selectUser } from '@/modules/Auth'
import { useAppDispatch, useAppSelector } from '@/store'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export const HomePageHeader = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/auth')
  }

  return (
    <header className="header">
      <a
        className="profile"
        href="#"
      >
        <img
          src="student2.png"
          alt="Profile Image"
        />
        <span>{user?.name}</span>
      </a>
      <IconButton
        icon={<MdLogout />}
        aria-label="logout"
        isRound
        size={'sm'}
        onClick={handleClickLogout}
      />
    </header>
  )
}
