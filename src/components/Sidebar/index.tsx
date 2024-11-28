import { useState } from 'react'
import MessageIcon from '../../assets/Icons/MessageIcon'
import UserIcon from '../../assets/Icons/UserIcon'
import logoImage from '../../assets/logo.png'
import ChevronLeftDouble from '../../assets/Icons/ChevronLeftDouble'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      className={`${isCollapsed ? 'w-20' : 'w-[248px]'} transition-all duration-500 ease-in-out h-screen bg-[#1A1D1F] px-4 py-6 flex flex-col gap-10`}
    >
      <img src={logoImage} alt='logo' className='w-10 h-10' />

      <div className='flex flex-col gap-2 w-full text-[15px]'>
        <div className='font-bold text-[#2E87FF] w-full line-clamp-1 flex gap-3 items-center p-3 rounded-xl bg-[#272B30]'>
          <UserIcon /> {!isCollapsed && <p className='line-clamp-1'>회원계정</p>}
        </div>
        <div className='font-bold text-white flex gap-3 items-center p-3 rounded-xl'>
          <MessageIcon /> {!isCollapsed && <p className='line-clamp-1'>고객센터 문의</p>}
        </div>
      </div>
      <div className='flex justify-end mt-auto'>
        <button
          onClick={() => {
            toggleSidebar()
          }}
        >
          <ChevronLeftDouble />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
