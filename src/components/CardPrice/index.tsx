import React from 'react'

const CardPrice = () => {
  return (
    <div className='w-[224px] h-fit px-4 py-3 bg-[#cec1fe]/70 rounded-xl border-4 border-white flex-col justify-start items-start gap-2.5 inline-flex'>
      <div className='self-stretch h-fit flex-col justify-start items-start gap-2.5 flex'>
        <div className='self-stretch h-6 flex-col justify-start items-start gap-3 flex'>
          <div className='self-stretch justify-between items-center inline-flex'>
            <div className="text-[#121416] text-base font-medium font-['Noto Sans KR'] leading-normal">
              강남코코타이마사지
            </div>
          </div>
        </div>
        <div className='self-stretch justify-between items-center inline-flex'>
          <div className="text-[#121416] text-xs font-medium font-['Noto Sans KR'] leading-normal">
            최고매출: 일 100만원 | 월 1,000만원
            <br />
            평균매출: 일 80만원 | 월 900만원
            <br />
            최저매출: 일 50만원 | 월600만원
          </div>
        </div>
        <div className='self-stretch px-3 py-1 bg-white rounded-md shadow shadow-inner justify-center items-center gap-1 inline-flex'>
          <div className="text-[#33383f] text-xs font-normal font-['Noto Sans KR'] leading-none">
            강남구 선릉호121호
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPrice
