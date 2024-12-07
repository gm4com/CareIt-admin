import ArrowLeftIcon from '@/assets/Icons/ArrowLeftIcon'
import SalesByStore from '@/components/SalesByStore'
import SettlementByEmployee from '@/components/SettlementByEmployee'
import StoreDashboard from '@/components/StoreDashboard'
import StoresOwned from '@/components/StoresOwned'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

const LIST_TAB = ['매장 대쉬보드', ' 매장별 매출', '직원별 정산', '보유 매장']

function MemberDetail() {
  const [tab, setTab] = useState<number>(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const tabSearch = searchParams.get('tab')

  useEffect(() => {
    setTab(Number(tabSearch))
  }, [tabSearch])
  const navigate = useNavigate()

  const handleChangeTab = (newTab: string) => {
    setSearchParams({ tab: newTab })
  }
  return (
    <div className='bg-black p-8 h-screen flex flex-col gap-8 overflow-y-scroll'>
      <div className='w-fit h-8 justify-start items-center gap-3 inline-flex' onClick={() => navigate(-1)}>
        <div className='w-7 h-7 relative'>
          <ArrowLeftIcon width={28} height={28} />
        </div>
        <div className="text-white text-[28px] font-bold font-['Noto Sans KR'] leading-loose">매장별 매출</div>
      </div>
      <div className='w-fit h-fit pt-[20px] bg-[#1a1d1f] rounded-xl justify-center items-center inline-flex'>
        <div className='grow shrink basis-0 self-stretch pb-[0.43px] flex-col justify-start items-start gap-[0.07px] inline-flex'>
          <div className='self-stretch justify-start items-start gap-4 inline-flex'>
            <div className='justify-start items-center gap-3 flex'>
              {LIST_TAB.map((item, index) => (
                <div
                  key={item}
                  className={clsx(
                    'w-[150.86px] flex-col justify-center items-center inline-flex',
                    index === tab && 'border-b-2 border-[#2d87ff]'
                  )}
                  onClick={() => handleChangeTab(index.toString())}
                >
                  <div className='px-1 pb-4 justify-center items-center gap-1 inline-flex'>
                    <div
                      className={clsx(
                        " text-sm font-medium font-['Noto Sans KR'] leading-tight",
                        tab === index ? 'text-[#2d87ff]' : 'text-[#efefef]'
                      )}
                    >
                      매장 대쉬보드
                    </div>
                  </div>
                  <div className='self-stretch h-0.5' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {tab === 0 && <StoreDashboard />}
      {tab === 1 && <SalesByStore />}
      {tab === 2 && <SettlementByEmployee />}
      {tab === 3 && <StoresOwned />}
    </div>
  )
}

export default MemberDetail
