import React from 'react'
import CustomTable from '../../components/CustomTable'

interface User {
  id: number
  name: string
  gender: string
  age: number
}

const fetchUserData = async (page: number, itemsPerPage: number) => {
  // Giả lập gọi API
  const totalItems = 100 // Tổng số bản ghi giả lập
  const data = Array.from({ length: itemsPerPage }, (_, i) => ({
    id: page * itemsPerPage + i + 1,
    name: `User ${page * itemsPerPage + i + 1}`,
    gender: i % 2 === 0 ? 'Male' : 'Female',
    age: 20 + (i % 30)
  }))
  return { data, totalItems }
}

const renderUserRow = (user: User) => (
  <>
    <td className='px-6 py-4'>{user.id}</td>
    <td className='px-6 py-4'>{user.name}</td>
    <td className='px-6 py-4'>{user.gender}</td>
    <td className='px-6 py-4'>{user.age}</td>
  </>
)

const UserTable = () => {
  return (
    <CustomTable
      fetchData={fetchUserData}
      columns={['No', '테라피스트 이름', '어제 매출/고객 수', '저번주 매출/고객 수']}
      renderRow={renderUserRow}
    />
  )
}

export default UserTable
