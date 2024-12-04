import React from 'react'
import MaximizeIcon from '../../assets/Icons/MaximizeIcon'
import UpIcon from '../../assets/Icons/UpIcon'
import MailIcon from '../../assets/Icons/MailIcon'
import CoinIcon from '../../assets/Icons/CoinIcon'
import DownloadIcon from '../../assets/Icons/DownloadIcon'
import UserTable from '../../pages/User'

const SettlementByEmployee = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='h-fit justify-start items-start gap-3 inline-flex'>
        <div className='w-[558px] px-5 pt-5 pb-4 bg-[#1a1d1f] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex'>
          <div className='self-stretch h-[291px] flex-col justify-start items-start gap-6 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-[#fcfcfc] text-lg font-bold font-['Noto Sans KR'] leading-normal">
                오늘 급여날인 직원
              </div>
              <div className='w-5 h-5 relative'>
                <MaximizeIcon />
              </div>
            </div>
            <div className='self-stretch h-[243px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch h-[29px] flex-col justify-start items-start gap-3 flex'>
                <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                  <div className="w-[22px] text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">NO</div>
                  <div className="w-28 text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">이름</div>
                  <div className="w-[72px] text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    급여
                  </div>
                  <div className="w-16 text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    인센티브
                  </div>
                  <div className="w-16 text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">합계</div>
                  <div className="w-[72px] text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    저번달 대비
                  </div>
                  <div className="w-16 text-right text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    SMS/엑셀
                  </div>
                </div>
                <div className='h-px relative bg-[#272b30]/70 rounded-[1px]' />
              </div>
              <div className='self-stretch h-[206px] flex-col justify-start items-start gap-1 flex'>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      1
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Kim Min Jea
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      2
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Cody Fisher
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      3
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Leslie Alexander
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      4
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Annette Black
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      5
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Jane Cooper
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">5%</div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] origin-top-left -rotate-180 justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[120px]' />
        </div>
        <div className='w-[558px] px-5 pt-5 pb-4 bg-[#1a1d1f] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex'>
          <div className='self-stretch h-[291px] flex-col justify-start items-start gap-6 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-[#fcfcfc] text-lg font-bold font-['Noto Sans KR'] leading-normal">
                내일 급여날인 직원
              </div>
              <div className='w-5 h-5 relative'>
                <MaximizeIcon />
              </div>
            </div>
            <div className='self-stretch h-[243px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch h-[29px] flex-col justify-start items-start gap-3 flex'>
                <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                  <div className="w-[22px] text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">NO</div>
                  <div className="w-[113px] text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    이름
                  </div>
                  <div className="w-[72px] text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    급여
                  </div>
                  <div className="w-16 text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    인센티브
                  </div>
                  <div className="w-16 text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">합계</div>
                  <div className="w-[72px] text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    저번달 대비
                  </div>
                  <div className="w-[63px] text-right text-[#efefef] text-xs font-bold font-['Noto Sans KR'] leading-none">
                    SMS/엑셀
                  </div>
                </div>
                <div className='h-px relative bg-[#272b30]/70 rounded-[1px]' />
              </div>
              <div className='self-stretch h-[206px] flex-col justify-start items-start gap-1 flex'>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      1
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Eleanor Pena
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex'>
                          <UpIcon />
                        </div>
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute'>
                      <MailIcon />
                    </div>
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative'>
                      <CoinIcon />
                    </div>
                    <div className='w-[18px] h-[18px] relative'>
                      <DownloadIcon />
                    </div>
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      2
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Jacob Jones
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      3
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Albert Flores
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      4
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Arlene McCoy
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                          10%
                        </div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
                <div className='h-[38px] py-2 justify-center items-center gap-1.5 inline-flex'>
                  <div className='w-[470px] h-[22px] relative'>
                    <div className="w-[22px] left-0 top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      5
                    </div>
                    <div className="w-28 left-[30px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      Esther Howard
                    </div>
                    <div className="w-[72px] left-[150px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      100만원
                    </div>
                    <div className="w-16 left-[230px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      70만원
                    </div>
                    <div className="w-16 left-[302px] top-[1px] absolute text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">
                      170만원
                    </div>
                    <div className='w-[72px] h-[22px] left-[374px] top-0 absolute justify-start items-center gap-1 inline-flex'>
                      <div className='h-[22px] px-1.5 pb-0.5 bg-[#33383f] rounded justify-start items-center gap-2.5 flex'>
                        <div className="text-[#fcfcfc] text-sm font-normal font-['Noto Sans KR'] leading-tight">5%</div>
                      </div>
                      <div className='w-3.5 h-3.5 px-[2.62px] py-[1.75px] origin-top-left -rotate-180 justify-center items-center flex'>
                        <div className='w-[8.75px] h-[10.50px] relative flex-col justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='w-[18px] h-[18px] left-[452px] top-[2px] absolute' />
                  </div>
                  <div className='justify-start items-center gap-1.5 inline-flex'>
                    <div className='w-[18px] h-[18px] relative' />
                    <div className='w-[18px] h-[18px] relative' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[120px]' />
        </div>
      </div>
      <div className='w-full bg-[#1a1d1f] p-6 flex flex-col rounded-xl'>
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
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default SettlementByEmployee
