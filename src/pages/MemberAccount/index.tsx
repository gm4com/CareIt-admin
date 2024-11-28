import UserTable from '../User'

const MemberAccount = () => {
  return (
    <div className='bg-black p-8 h-screen flex flex-col gap-8 overflow-y-scroll'>
      <div className='w-[1128px] h-8 justify-start items-center gap-3 inline-flex'>
        <div className='w-7 h-7 relative' />
        <div className="text-white text-[28px] font-bold font-['Noto Sans KR'] leading-loose">매장별 매출</div>
      </div>
      <div className='w-[1128px] h-14 pt-[21.50px] bg-[#1a1d1f] rounded-xl justify-center items-center inline-flex'>
        <div className='grow shrink basis-0 self-stretch pb-[0.43px] flex-col justify-start items-start gap-[0.07px] inline-flex'>
          <div className='self-stretch justify-start items-start gap-4 inline-flex'>
            <div className='justify-start items-center gap-3 flex'>
              <div className='w-[150.86px] flex-col justify-center items-center inline-flex'>
                <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                  <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">
                    매장 대쉬보드
                  </div>
                </div>
                <div className='self-stretch h-0.5' />
              </div>
              <div className='w-[150.86px] border-b-2 border-[#2d87ff] flex-col justify-center items-center inline-flex'>
                <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                  <div className="text-[#2d87ff] text-sm font-bold font-['Noto Sans KR'] leading-tight">
                    매장별 매출
                  </div>
                </div>
                <div className='self-stretch h-0.5' />
              </div>
              <div className='w-[150.86px] flex-col justify-center items-center inline-flex'>
                <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                  <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">
                    직원별 정산
                  </div>
                </div>
                <div className='self-stretch h-0.5' />
              </div>
              <div className='w-[150.86px] flex-col justify-center items-center inline-flex'>
                <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                  <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">
                    보유 매장 5
                  </div>
                </div>
                <div className='self-stretch h-0.5' />
              </div>
            </div>
          </div>
          <div className='self-stretch h-px bg-[#272b30]/70' />
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='w-full h-11 justify-center items-center inline-flex'>
          <div className='justify-start items-center gap-3 flex'>
            <div className='pl-4 pr-3 py-2.5 bg-[#272b30]/70 rounded-xl border border-[#272b30]/70 justify-start items-center gap-2 flex'>
              <div className="w-[161px] text-[#6f767e] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                검색
              </div>
              <div className='w-[22px] h-[22px] relative' />
            </div>
            <div className='pl-4 pr-3 py-2.5 bg-[#272b30]/70 rounded-xl border border-[#272b30]/70 justify-start items-center gap-2 flex'>
              <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">
                2024/01/01 - 2024/11/01
              </div>
              <div className='w-[22px] h-[22px] relative' />
            </div>
          </div>
        </div>

        <div className='w-full bg-[#1a1d1f] p-6 flex flex-col'>
          <div className='h-11 p-1 bg-[#121416] rounded-lg justify-center items-center gap-1 inline-flex'>
            <div className='w-[265px] h-9 px-4 py-1 rounded-[32px] justify-center items-center gap-2 flex'>
              <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                매출 통계
              </div>
            </div>
            <div className='w-[265px] h-9 px-4 pt-[3px] pb-[5px] bg-[#272b30] rounded-md shadow shadow-inner justify-center items-center gap-2 flex'>
              <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">
                테라피스트 통계
              </div>
            </div>
            <div className='w-[265px] h-9 px-4 py-1 rounded-[32px] justify-center items-center gap-2 flex'>
              <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                플랫폼 통계
              </div>
            </div>
            <div className='w-[265px] h-9 px-4 py-1 rounded-[32px] justify-center items-center gap-2 flex'>
              <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                메뉴별 통계
              </div>
            </div>
          </div>
          <div>
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberAccount
