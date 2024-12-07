import { Input } from '@headlessui/react'
import CalendarIcon from '../../assets/Icons/CalendarIcon'
import SearchIcon from '../../assets/Icons/SearchIcon'
import CustomTable from '../CustomTable'

const SalesByStore = () => {
  const fetchUserData = async (page: number, itemsPerPage: number) => {
    // Giả lập gọi API
    const totalItems = 100 // Tổng số bản ghi giả lập
    const data = Array.from({ length: itemsPerPage }, (_, i) => ({
      id: page * itemsPerPage + i + 1,
      name: `ㄴㅇ ${page * itemsPerPage + i + 1}`,
      gender: i % 2 === 0 ? 'Male' : 'Female',
      age: 20 + (i % 30),
      name1: `ㄴㅇ ${page * itemsPerPage + i + 1}`
    }))
    return { data, totalItems }
  }

  const renderUserRow = (data: any) => (
    <>
      <td className='px-6 py-4'>{data.id}</td>
      <td className='px-6 py-4'>ㄴㅇ</td>
      <td className='px-6 py-4'>30만원 / 5명</td>
      <td className='px-6 py-4'>210만원/35명</td>
      <td className='px-6 py-4'>900만원/150명</td>
    </>
  )
  return (
    <div className='flex flex-col gap-5'>
      <div className='w-full h-11 justify-center items-center inline-flex'>
        <div className='justify-start items-center gap-3 flex'>
          <div className='pl-4 pr-3 py-2.5 bg-[#272b30]/70 rounded-xl border-2 border-[#6f767e]/10 justify-start items-center gap-2 flex'>
            <div className="w-[161px] text-[#6f767e] text-sm font-normal font-['Noto Sans KR'] leading-tight">
              <Input
                className='bg-[#272b30]/10 grow shrink basis-0 h-6 justify-start items-center gap-2 flex outline-none'
                type='text'
                placeholder='검색'
              />
            </div>
            <div className='w-[22px] h-[22px] relative'>
              <SearchIcon />
            </div>
          </div>
          <div className='pl-4 pr-3 py-2.5 bg-[#272b30]/70 rounded-xl border border-[#272b30]/70 justify-start items-center gap-2 flex'>
            <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">
              2024/01/01 - 2024/11/01
            </div>
            <div className='w-[22px] h-[22px] relative'>
              <CalendarIcon />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#1a1d1f] p-6 flex flex-col'>
        <div className='h-11 p-1 bg-[#121416] rounded-lg justify-center items-center gap-1 inline-flex'>
          <div className='w-1/4 h-9 px-4 py-1 rounded-[32px] justify-center items-center gap-2 flex'>
            <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">매출 통계</div>
          </div>
          <div className='w-1/4 h-9 px-4 pt-[3px] pb-[5px] bg-[#272b30] rounded-md shadow-inner justify-center items-center gap-2 flex'>
            <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">
              테라피스트 통계
            </div>
          </div>
          <div className='w-1/4 h-9 px-4 py-1 rounded-[32px] justify-center items-center gap-2 flex'>
            <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
              플랫폼 통계
            </div>
          </div>
          <div className='w-1/4 h-9 px-4 py-1 rounded-[32px] justify-center items-center gap-2 flex'>
            <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
              메뉴별 통계
            </div>
          </div>
        </div>
        <div>
          <CustomTable
            fetchData={fetchUserData}
            columns={['No', '테라피스트 이름', '어제 매출/고객 수', '저번주 매출/고객 수', '저번달 매출/고객 수']}
            renderRow={renderUserRow}
          />
        </div>
      </div>
    </div>
  )
}

export default SalesByStore
