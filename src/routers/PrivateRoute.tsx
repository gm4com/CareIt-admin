import React from 'react'
import { Navigate } from 'react-router'

interface PrivateRouteProps {
  children: JSX.Element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem('token'))
  return isAuthenticated ? children : <Navigate to='/login' replace />
}

export default PrivateRoute
