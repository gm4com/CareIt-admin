import { Checkbox, Input } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CheckIcon from '../../assets/Icons/CheckIcon'
import EyeIcon from '../../assets/Icons/EyeIcon'
import LockIcon from '../../assets/Icons/LockIcon'
import UserOutline from '../../assets/Icons/UserOutline'
import { useNavigate } from 'react-router'
import { ROUTES } from '../../routers/routes'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  const [enabled, setEnabled] = useState(false)
  const [hidePassword, setHidePassword] = useState(false)
  return (
    <div className='w-full h-screen flex-col justify-start items-center gap-12 inline-flex bg-[#121416]'>
      <div className='w-full h-16 px-[148px] py-3 border-b border-[#6f767e]/10 justify-center items-center inline-flex'>
        <div className='grow shrink basis-0 self-stretch' />
      </div>
      <div className='flex-col justify-start items-center gap-6 flex'>
        <div className='p-8 bg-[#1a1d1f] rounded-2xl shadow justify-start items-center gap-2.5 inline-flex'>
          <div className='w-[416px] flex-col justify-start items-center gap-12 inline-flex'>
            <div className='flex-col justify-start items-center gap-3 flex'>
              <div className="text-[#efefef] text-[28px] font-medium font-['Noto Sans KR'] leading-loose">
                운영자 센터
              </div>
              <div className="text-center text-[#fcfcfc] text-[28px] font-medium font-['Noto Sans KR'] leading-loose">
                로그인 페이지
              </div>
            </div>
            <form
              className='self-stretch h-[228px] flex-col justify-start items-start gap-8 flex'
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className='self-stretch h-[228px] flex-col justify-start items-center gap-6 flex'>
                <div className='self-stretch h-[228px] flex-col justify-start items-start gap-8 flex'>
                  <div className='self-stretch h-28 flex-col justify-start items-start gap-4 flex'>
                    <div className='self-stretch px-4 py-3 bg-[#272b30]/70 text-white rounded-xl shadow border border-[#6f767e]/10 justify-start items-center gap-2 inline-flex'>
                      <div className='w-5 h-5 relative'>
                        <UserOutline />
                      </div>
                      <Input
                        className='bg-[#272b30]/10 grow shrink basis-0 h-6 justify-start items-center gap-2 flex outline-none'
                        type='text'
                        placeholder='아이디 입력'
                        {...register('username')}
                      />
                    </div>

                    <div className='self-stretch px-4 py-3 bg-[#272b30]/70 text-white rounded-xl shadow border border-[#6f767e]/10 justify-start items-center gap-2 inline-flex'>
                      <div className='w-5 h-5 relative'>
                        <LockIcon />
                      </div>
                      <Input
                        className='bg-[#272b30]/10 grow shrink basis-0 h-6 justify-start items-center gap-2 flex outline-none'
                        type={hidePassword ? 'password' : 'text'}
                        placeholder='비밀번호 입력'
                        {...register('password')}
                      />
                      <div className='w-5 h-5 relative' onClick={() => setHidePassword(!hidePassword)}>
                        <EyeIcon />
                      </div>
                    </div>
                  </div>
                  <div className='self-stretch h-[84px] flex-col justify-start items-start gap-4 flex'>
                    <button
                      className='self-stretch px-5 py-3 bg-[#2d87ff] rounded-xl shadow border border-[#2d87ff] justify-center items-center gap-2 inline-flex'
                      onClick={() => {
                        navigate(ROUTES.MEMBER_ACCOUNT)
                      }}
                    >
                      <div className="text-white text-[15px] font-bold font-['Noto Sans KR'] leading-normal">
                        로그인
                      </div>
                    </button>
                    <div className='self-stretch justify-between items-center inline-flex'>
                      <div className='justify-start items-center gap-2 flex'>
                        <Checkbox
                          checked={enabled}
                          className='w-[18px] h-[18px] p-[2.25px] bg-[#272b30]/70 rounded border border-[#2d87ff] justify-center items-center flex'
                          onChange={setEnabled}
                        >
                          {!enabled && <CheckIcon />}
                        </Checkbox>
                        <div
                          className="text-[#efefef] text-sm font-normal font-['Noto Sans KR'] leading-tight"
                          onClick={() => setEnabled(!enabled)}
                        >
                          로그인 유지
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
