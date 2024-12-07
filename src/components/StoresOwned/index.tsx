import ArrowLeftIcon from '@/assets/Icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/Icons/ArrowRightIcon'
import CardPrice from '../CardPrice'

const StoresOwned = () => {
  return (
    <div>
      <div className='w-full h-fit p-5 bg-[#1a1d1f] rounded-xl justify-end items-center inline-flex'>
        <div className='w-full self-stretch flex-col justify-start items-center gap-3 inline-flex'>
          <div className='self-stretch h-[212px] flex-col justify-start items-start gap-5 flex'>
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
    </div>
  )
}

export default StoresOwned
