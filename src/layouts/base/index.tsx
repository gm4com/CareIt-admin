import Sidebar from '@/components/Sidebar'
import useMobileScale from '@/hooks/useMobileScale'
import { ROUTES } from '@/routers/routes'
import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const location = useLocation()
  const { scale, isMobile } = useMobileScale(1280)
  const [isShowSidebar, setIsShowSidebar] = useState(true)
  useEffect(() => {
    if ([ROUTES.LOGIN].includes(location.pathname)) {
      setIsShowSidebar(false)
    } else {
      setIsShowSidebar(true)
    }
  }, [location.pathname])
  return (
    <div
      className='flex w-screen h-screen bg-black'
      style={
        isMobile
          ? {
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              width: '1280px',
              height: `${800 * scale}px`
            }
          : {}
      }
    >
      {isShowSidebar && <Sidebar />}
      <div className='flex-1 h-screen'>{children}</div>
    </div>
  )
}

export default BaseLayout
