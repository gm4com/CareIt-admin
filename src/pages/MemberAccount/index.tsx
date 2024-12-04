import AddCycle from '../../assets/Icons/AddCycleIcon'
import AddIcon from '../../assets/Icons/AddIcon'
import FilterIcon from '../../assets/Icons/FilterIcon'
import SearchIcon from '../../assets/Icons/SearchIcon'
import UserTable from '../User'

const MemberAccount = () => {
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
            <div className="w-[161px] text-[#6f767e] text-sm font-normal font-['Noto Sans KR'] leading-tight">검색</div>
            <div className='w-[22px] h-[22px] relative'>
              <SearchIcon />
            </div>
          </div>
          <div className='px-3 py-2.5 bg-[#272b30]/70 rounded-xl border-2 border-[#2d87ff] justify-start items-center gap-2 flex'>
            <div className='w-[22px] h-[22px] relative'>
              <FilterIcon />
            </div>
          </div>
        </div>
        <div className='pl-4 pr-3 py-2.5 bg-[#2d87ff] rounded-xl justify-start items-center gap-2 flex'>
          <div className="text-white text-sm font-medium font-['Noto Sans KR'] leading-tight">사용자 생성</div>
          <div className='w-5 h-5 relative'>
            <AddIcon />
          </div>
        </div>
      </div>

      <UserTable />
    </div>
  )
}

export default MemberAccount
