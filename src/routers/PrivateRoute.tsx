import React from 'react'
import { Navigate } from 'react-router'

interface PrivateRouteProps {
  children: JSX.Element
  isAuthenticated: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to='/login' replace />
}

export default PrivateRoute
