import { Checkbox } from '@headlessui/react'
import { useState } from 'react'

function CustomCheckbox() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className='group block size-[18px] rounded bg-[#272b30]/70 data-[checked]:bg-blue-500 border-2 border-[#6f767e]/10'
    >
      {/* Checkmark icon */}
      <svg className='stroke-white opacity-0 group-data-[checked]:opacity-100' viewBox='0 0 14 14' fill='none'>
        <path d='M3 8L6 11L11 3.5' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </Checkbox>
  )
}
export default CustomCheckbox
