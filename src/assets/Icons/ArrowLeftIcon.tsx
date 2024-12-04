import React from 'react'

interface ArrowLeftIconProps {
  width?: number
  height?: number
}

const ArrowLeftIcon = ({ width, height }: ArrowLeftIconProps) => {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox={`0 0 20 20`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.8327 9.99984H4.16602M4.16602 9.99984L9.99935 15.8332M4.16602 9.99984L9.99935 4.1665'
        stroke='#EFEFEF'
        stroke-width='1.67'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default ArrowLeftIcon
