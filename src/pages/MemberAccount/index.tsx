import AddCycle from '@/assets/Icons/AddCycleIcon'
import AddIcon from '@/assets/Icons/AddIcon'
import DeleteIcon from '@/assets/Icons/DeleteIcon'
import EditIcon from '@/assets/Icons/EditIcon'
import SearchIcon from '@/assets/Icons/SearchIcon'
import CustomTable from '@/components/CustomTable'
import FilterMenu from '@/components/FilterMenu'
import { ROUTES } from '@/routers/routes'
import { Member } from '@/types/member'
import { Input } from '@headlessui/react'
import { useNavigate } from 'react-router'

const MemberAccount = () => {
  const navigate = useNavigate()
  const fetchUserData = async (page: number, itemsPerPage: number) => {
    // Giả lập gọi API
    const totalItems = 100 // Tổng số bản ghi giả lập
    const data = Array.from({ length: itemsPerPage }, (_, i) => ({
      id: page * itemsPerPage + i + 1,
      name: `Member ${page * itemsPerPage + i + 1}`,
      email: `Email ${page * itemsPerPage + i + 1}`,
      address: `Address ${page * itemsPerPage + i + 1}`,
      phoneNumber: `PhoneNumber ${page * itemsPerPage + i + 1}`
    }))
    return { data, totalItems }
  }

  const renderUserRow = (member: Member) => (
    <>
      <td className='px-6 py-4'>{member.id}</td>
      <td
        className='px-6 py-4 cursor-pointer hover:text-blue-500'
        onClick={() => {
          navigate(`${ROUTES.MEMBER_DETAIL}/${member.id}`)
        }}
      >
        {member.name}
      </td>
      <td className='px-6 py-4'>{member.email}</td>
      <td className='px-6 py-4'>{member.address}</td>
      <td className='px-6 py-4'>{member.phoneNumber}</td>
      <td className='px-6 py-4 flex gap-3'>
        <button>
          <EditIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </td>
    </>
  )
  return (
    <div className='bg-black p-8 h-screen flex flex-col gap-8 overflow-y-scroll'>
      <div className='w-full h-14 pt-[21.50px] bg-[#1a1d1f] rounded-xl justify-center items-center inline-flex'>
        <div className='grow shrink basis-0 self-stretch pb-[0.43px] flex-col justify-start items-start gap-[0.07px] inline-flex'>
          <div className='self-stretch justify-start items-start gap-4 inline-flex'>
            <div className='justify-start items-center gap-3 flex'>
              <div className='w-[150.86px] border-b-2 border-[#2d87ff] flex-col justify-center items-center inline-flex'>
                <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                  <div className="text-[#2d87ff] text-sm font-bold font-['Noto Sans KR'] leading-tight">전체(121)</div>
                </div>
                <div className='self-stretch h-0.5' />
              </div>
              <div className='w-[150.86px] flex-col justify-center items-center inline-flex'>
                <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                  <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">
                    매장회원(122)
                  </div>
                </div>
                <div className='self-stretch h-0.5' />
              </div>
              <div className='w-[150.86px] flex-col justify-center items-center inline-flex'>
                <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                  <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">
                    관리자(2)
                  </div>
                </div>
                <div className='self-stretch h-0.5' />
              </div>
              <div className='w-[150.86px] flex-col justify-center items-center gap-2.5 inline-flex'>
                <div className='self-stretch h-[26px] justify-center items-start gap-1 inline-flex'>
                  <div className="text-[#2d87ff] text-sm font-medium font-['Noto Sans KR'] leading-tight">
                    그룹 추가
                  </div>
                  <div className='w-5 h-5 justify-center items-center flex'>
                    <div className='w-5 h-5 relative'>
                      <AddCycle />
                    </div>
                  </div>
                </div>
                <div className='w-[150.86px] h-0.5' />
              </div>
            </div>
          </div>
          <div className='self-stretch h-px bg-[#272b30]/70' />
        </div>
      </div>

      <div className='h-11 justify-between items-center inline-flex'>
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

          <FilterMenu />
        </div>
        <div className='pl-4 pr-3 py-2.5 bg-[#2d87ff] rounded-xl justify-start items-center gap-2 flex'>
          <div className="text-white text-sm font-medium font-['Noto Sans KR'] leading-tight">사용자 생성</div>
          <div className='w-5 h-5 relative'>
            <AddIcon />
          </div>
        </div>
      </div>
      <div className='bg-[#1a1d1f] rounded-xl'>
        <CustomTable
          fetchData={fetchUserData}
          columns={['No', '회사이름', '이메일', '주소', '사업자번호', '']}
          renderRow={renderUserRow}
          isSelectRow
        />
      </div>
    </div>
  )
}

export default MemberAccount
