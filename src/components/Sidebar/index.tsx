import { useState } from 'react'
import MessageIcon from '@/assets/Icons/MessageIcon'
import { UserIcon, UserIconInActive } from '@/assets/Icons/UserIcon'
import logoImage from '@/assets/logo.png'
import ChevronLeftDouble from '@/assets/Icons/ChevronLeftDouble'
import { Link, useLocation } from 'react-router'
import { ROUTES } from '@/routers/routes'
import clsx from 'clsx'

interface SidebarMenuItem {
  title: string
  icon: React.ReactNode
  isActive: boolean
  path: string
}

const Sidebar = () => {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const sidebarMenu: SidebarMenuItem[] = [
    {
      title: '회원계정',
      icon: location.pathname === ROUTES.MEMBER_ACCOUNT ? <UserIcon /> : <UserIconInActive />,
      isActive: location.pathname === ROUTES.MEMBER_ACCOUNT,
      path: ROUTES.MEMBER_ACCOUNT
    },
    {
      title: '고객센터 문의',
      icon: <MessageIcon />,
      isActive: false,
      path: ROUTES.MEMBER_ACCOUNT
    }
  ]

  return (
    <div
      className={`${isCollapsed ? 'min-w-20 transition-all duration-500 ease-in-out' : 'min-w-[248px]'} h-screen bg-[#1A1D1F] px-4 py-6 flex flex-col gap-10`}
    >
      <img src={logoImage} alt='logo' className='w-10 h-10' />

      <div className='flex flex-col gap-2 w-full text-[15px]'>
        {sidebarMenu.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className={`font-bold flex gap-3 items-center p-3 rounded-xl ${
              menu.isActive ? 'text-[#2E87FF] bg-[#272B30]' : 'text-white bg-transparent'
            }`}
          >
            {menu.icon}
            {!isCollapsed && <p className='line-clamp-1'>{menu.title}</p>}
          </Link>
        ))}
      </div>
      <div className='flex justify-end mt-auto'>
        <button
          onClick={() => {
            toggleSidebar()
          }}
          className={clsx(isCollapsed ? 'rotate-180' : '')}
        >
          <ChevronLeftDouble />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
