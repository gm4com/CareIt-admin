import React from 'react'
import { Route, Routes } from 'react-router'
import PrivateRoute from './PrivateRoute'
import { routes } from './routes'

const AppRouter: React.FC = () => {
  const isAuthenticated = false
  return (
    <Routes>
      {routes.map((route) =>
        route.private ? (
          <Route
            key={route.path}
            path={route.path}
            element={<PrivateRoute isAuthenticated={isAuthenticated}>{route.element}</PrivateRoute>}
          />
        ) : (
          <Route key={route.path} path={route.path} element={route.element} />
        )
      )}
    </Routes>
  )
}

export default AppRouter
