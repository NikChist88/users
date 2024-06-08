import { IconButton } from '@chakra-ui/react'
import { MdLogout } from 'react-icons/md'
import './styles.css'

export const HomePageHeader = () => {
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
        <span>Sam Sepiol</span>
      </a>
      <IconButton
        icon={<MdLogout />}
        aria-label="logout"
        isRound
        size={'sm'}
      />
    </header>
  )
}
