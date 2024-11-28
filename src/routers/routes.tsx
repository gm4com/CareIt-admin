// import Login from '../pages/login'
import Login from '../pages/Login'
import MemberAccount from '../pages/MemberAccount'
import NotFoundPage from '../pages/NotFound'

export interface RouteConfig {
  path: string
  element: JSX.Element
  private?: boolean
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  MEMBER_ACCOUNT: '/member_account',
  CUSTOMER_SERVICE: '/customer_service',
  NOT_FOUND: '*'
}

export const routes: RouteConfig[] = [
  { path: ROUTES.LOGIN, element: <Login />, private: false },
  { path: ROUTES.HOME, element: <>HOme</>, private: true },
  { path: ROUTES.MEMBER_ACCOUNT, element: <MemberAccount />, private: false },
  { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> } // Trang 404
]
