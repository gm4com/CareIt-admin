import React from 'react'
import { Link } from 'react-router'
import { ROUTES } from '../../routers/routes'

const NotFoundPage: React.FC = () => {
  return (
    <div className='text-center p-8 w-full'>
      <h1 className='text-4xl font-bold text-red-500'>404</h1>
      <p className='text-lg mt-4'>The page you are looking for does not exist.</p>
      <Link to={ROUTES.HOME} className='mt-4 text-blue-500 underline'>
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
