import FilterIcon from '@/assets/Icons/FilterIcon'
import { useState, useEffect, useRef } from 'react'

const FilterMenu = () => {
  const [isOpen, setIsOpen] = useState(false) // Trạng thái mở/tắt menu
  const menuRef = useRef<HTMLDivElement>(null) // Tham chiếu đến menu
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  const toggleSelection = (item: string) => {
    setSelectedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const options = ['최신순', '오래된순', '매출 높은 순', '매출 낮은 순', '매출 높은 지역순', '매출 낮은 지역순']

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu() // Đóng menu nếu click bên ngoài
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative inline-block text-left' ref={menuRef}>
      {/* Nút bấm mở menu */}
      <button
        onClick={toggleMenu}
        className='p-3 bg-[#272b30]/70 text-white rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        <FilterIcon />
      </button>

      {/* Menu thả xuống */}
      {isOpen && (
        <div className='absolute left-0 mt-2 w-64 bg-black rounded-lg shadow-lg ring-1 ring-blue-500'>
          {options.map((option) => (
            <div
              key={option}
              className='flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700'
              onClick={() => toggleSelection(option)}
            >
              <input
                type='checkbox'
                checked={selectedItems.includes(option)}
                onChange={() => toggleSelection(option)}
                className='w-5 h-5 border-gray-500 bg-black rounded-md focus:ring-blue-500'
              />
              <span className='ml-3 text-white'>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterMenu
