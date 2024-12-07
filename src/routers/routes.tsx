import Login from '@/pages/Login'
import MemberAccount from '@/pages/MemberAccount'
import MemberDetail from '@/pages/MemberDetail'
import NotFoundPage from '@/pages/NotFound'

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
  MEMBER_DETAIL: '/member_detail',
  NOT_FOUND: '*'
}

export const routes: RouteConfig[] = [
  { path: ROUTES.LOGIN, element: <Login />, private: false },
  { path: ROUTES.HOME, element: <>HOme</>, private: true },
  { path: ROUTES.MEMBER_ACCOUNT, element: <MemberAccount />, private: false },
  { path: `${ROUTES.MEMBER_DETAIL}/:id`, element: <MemberDetail />, private: false },
  { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> } // Trang 404
]
