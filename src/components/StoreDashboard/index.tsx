import { useSearchParams } from 'react-router'
import CardPrice from '../CardPrice'
import ArrowLeftIcon from '@/assets/Icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/Icons/ArrowRightIcon'
import CheveronIcon from '@/assets/Icons/CheveronIcon'

const StoreDashboard = () => {
  const [, setSearchParams] = useSearchParams()
  return (
    <div className='flex flex-col gap-3'>
      <div className='w-full h-fit p-5 bg-[#1a1d1f] rounded-xl justify-end items-center inline-flex'>
        <div className='w-full self-stretch flex-col justify-start items-center gap-3 inline-flex'>
          <div className='self-stretch h-fit flex-col justify-start items-start gap-5 flex'>
            <div className='self-stretch'>
              <span className="text-[#6f767e] text-lg font-bold font-['Noto Sans KR'] leading-normal">
                보유하고 있는 매장 :{' '}
              </span>
              <span className="text-white text-lg font-bold font-['Noto Sans KR'] leading-normal">총 5개 | </span>
              <span className="text-[#6f767e] text-lg font-bold font-['Noto Sans KR'] leading-normal">
                선택한 매장:
              </span>
              <span className="text-white text-lg font-bold font-['Noto Sans KR'] leading-normal">
                강남코코타이마사지
              </span>
            </div>
            <div className='self-stretch justify-start items-start gap-4 inline-flex'>
              <div className='justify-start items-start gap-4 flex w-full'>
                <CardPrice />
              </div>
            </div>
          </div>
          <div className='h-[34px] justify-start items-start gap-3 inline-flex'>
            <div className='p-2 bg-[#272b30]/70 rounded-[40px] border border-[#6f767e]/10 justify-start items-start gap-2.5 flex'>
              <div className='w-[18px] h-[18px] relative'>
                <ArrowLeftIcon />
              </div>
            </div>
            <div className='p-2 bg-[#272b30]/70 rounded-[40px] border border-[#6f767e]/10 justify-start items-start gap-2.5 flex'>
              <div className='w-[18px] h-[18px] relative'>
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[487px] justify-start items-start gap-3 inline-flex'>
        <div className='w-[368px] p-6 bg-[#1a1d1f] rounded-xl flex-col justify-start items-start gap-4 inline-flex'>
          <div className='self-stretch h-[385px] flex-col justify-start items-start gap-4 flex'>
            <div className='self-stretch h-[296px] flex-col justify-start items-start gap-4 flex'>
              <div className='self-stretch justify-between items-start inline-flex'>
                <div className="text-[#fcfcfc] text-lg font-bold font-['Noto Sans KR'] leading-normal">매출</div>
                <div className='pl-4 pr-3 py-1 bg-[#272b30]/70 rounded-xl border border-[#6f767e]/10 justify-start items-center gap-2 flex'>
                  <div className="text-[#fcfcfc] text-xs font-medium font-['Noto Sans KR'] leading-normal">월</div>
                  <div className='w-4 h-4 relative'>
                    <CheveronIcon />
                  </div>
                </div>
              </div>
              <div className='self-stretch h-[248px] flex-col justify-start items-start gap-2 flex'>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    30분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">
                    48개
                  </div>
                </div>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    60분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">
                    24개
                  </div>
                </div>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    90분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">
                    12개
                  </div>
                </div>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    120분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">
                    10개
                  </div>
                </div>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    180분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">8개</div>
                </div>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    200분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">8개</div>
                </div>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    240분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">8개</div>
                </div>
                <div className='self-stretch justify-between items-start inline-flex'>
                  <div className="w-[120px] text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                    320분관리
                  </div>
                  <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">8개</div>
                </div>
              </div>
            </div>
            <div className='h-px relative bg-[#272b30]/70 rounded-[1px]' />
            <div className='self-stretch h-14 flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch justify-between items-start inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">합계</div>
                <div className="text-[#fcfcfc] text-[15px] font-medium font-['Noto Sans KR'] leading-normal">96개</div>
              </div>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  금액합계 총
                </div>
                <div className="text-[#2d87ff] text-lg font-bold font-['Noto Sans KR'] leading-normal">121원</div>
              </div>
            </div>
          </div>
          <button
            className='self-stretch h-[38px] px-5 py-2 rounded-lg shadow border border-[#2d87ff] justify-center items-center gap-2 inline-flex'
            onClick={() => setSearchParams({ tab: '1' })}
          >
            <div className='justify-start items-center flex'>
              <div className="text-[#2d87ff] text-[13px] font-bold font-['Noto Sans KR'] leading-[18px]">
                세부정보 보기
              </div>
            </div>
          </button>
        </div>
        <div className='w-[368px] h-[487px] p-6 bg-[#1a1d1f] rounded-xl flex-col justify-between items-start inline-flex'>
          <div className='self-stretch h-96 flex-col justify-start items-start gap-4 flex'>
            <div className="self-stretch text-[#fcfcfc] text-lg font-bold font-['Noto Sans KR'] leading-normal">
              이용자수
            </div>
            <div className='self-stretch h-[344px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  1일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  2일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  3일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  4일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  5일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  6일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  7일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  8일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  9일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  10일전 80명
                </div>
              </div>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">
                  11일전 80명
                </div>
              </div>
            </div>
          </div>
          <button
            className='self-stretch h-[38px] px-5 py-2 rounded-lg shadow border border-[#2d87ff] justify-center items-center gap-2 inline-flex'
            onClick={() => setSearchParams({ tab: '1' })}
          >
            <div className='justify-start items-center flex'>
              <div className="text-[#2d87ff] text-[13px] font-bold font-['Noto Sans KR'] leading-[18px]">
                세부정보 보기
              </div>
            </div>
          </button>
        </div>
        <div className='w-[368px] h-[487px] p-6 bg-[#1a1d1f] rounded-xl flex-col justify-between items-start inline-flex'>
          <div className='self-stretch h-24 flex-col justify-start items-start gap-4 flex'>
            <div className="self-stretch text-[#fcfcfc] text-lg font-bold font-['Noto Sans KR'] leading-normal">
              직원수
            </div>
            <div className='self-stretch h-14 flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch justify-start items-start gap-20 inline-flex'>
                <div className="text-[#efefef] text-[15px] font-normal font-['Noto Sans KR'] leading-normal">10명</div>
              </div>
              <div className='self-stretch' />
            </div>
          </div>
          <button
            className='self-stretch h-[38px] px-5 py-2 rounded-lg shadow border border-[#2d87ff] justify-center items-center gap-2 inline-flex'
            onClick={() => setSearchParams({ tab: '1' })}
          >
            <div className='justify-start items-center flex'>
              <div className="text-[#2d87ff] text-[13px] font-bold font-['Noto Sans KR'] leading-[18px]">
                세부정보 보기
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StoreDashboard
