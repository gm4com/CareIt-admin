import Sidebar from '@/components/Sidebar'
import { ROUTES } from '@/routers/routes'
import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const location = useLocation()
  const [isShowSidebar, setIsShowSidebar] = useState(true)
  useEffect(() => {
    if ([ROUTES.LOGIN].includes(location.pathname)) {
      setIsShowSidebar(false)
    } else {
      setIsShowSidebar(true)
    }
  }, [location.pathname])
  return (
    <div className='flex w-screen h-screen bg-black'>
      {isShowSidebar && <Sidebar />}
      <div className='flex-1 h-screen'>{children}</div>
    </div>
  )
}

export default BaseLayout
