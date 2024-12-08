/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowLeftIcon from '@/assets/Icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/Icons/ArrowRightIcon'
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import CustomCheckbox from '../CustomCheckbox'

interface TableProps<T> {
  fetchData: (page: number, itemsPerPage: number) => Promise<{ data: T[]; totalItems: number }>
  columns: string[]
  renderRow: (item: T) => React.ReactNode
  itemsPerPage?: number
  onClickRow?: () => void
  isSelectRow?: boolean
}

const CustomTable = <T,>({
  fetchData,
  columns,
  renderRow,
  itemsPerPage = 10,
  onClickRow,
  isSelectRow
}: TableProps<T>) => {
  const [data, setData] = useState<T[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData(currentPage, itemsPerPage)
      setData(result.data)
      setTotalItems(result.totalItems)
    }
    loadData()
  }, [currentPage, itemsPerPage, fetchData])

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected)
  }

  return (
    <div className='w-full p-4 rounded-lg shadow-lg'>
      <table className='w-full text-sm text-left text-gray-400'>
        <thead className='text-sm uppercase dark:text-white text-white font-bold'>
          <tr>
            {isSelectRow && (
              <th>
                <CustomCheckbox />
              </th>
            )}
            {columns.map((col, index) => (
              <th key={index} className='px-6 py-3'>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className='text-[#fcfcfc] border-b border-gray-700 hover:bg-gray-700'
              onClick={() => onClickRow && onClickRow()}
            >
              {isSelectRow && (
                <td>
                  <CustomCheckbox />
                </td>
              )}
              {renderRow(item)}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className='flex justify-center items-center py-4 text-white'>
          <div
            className='min-w-[100px] h-5 justify-start items-center gap-2 inline-flex cursor-pointer'
            onClick={() => currentPage && setCurrentPage(currentPage - 1)}
          >
            <div className='w-5 h-5 relative'>
              <ArrowLeftIcon />
            </div>
            <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">전 페이지</div>
          </div>
          <ReactPaginate
            previousLabel={null}
            nextLabel={null}
            breakLabel={'...'}
            pageCount={totalPages}
            onPageChange={handlePageClick}
            containerClassName={'p-2  flex space-x-2 items-center justify-center w-full'}
            pageClassName={'rounded-full'}
            initialPage={currentPage}
            pageLinkClassName={'w-8 h-8 flex items-center justify-center hover:bg-gray-600 !rounded-full'} // Style thẻ a
            activeClassName={'bg-gray-700 !text-blue-600'}
            disabledClassName={'text-gray-500 cursor-not-allowed'}
            key={currentPage}
          />
          <div
            className='min-w-[100px] h-5 justify-end items-center gap-2 inline-flex cursor-pointer'
            onClick={() => totalPages > currentPage + 1 && setCurrentPage(currentPage + 1)}
          >
            <div className="text-[#efefef] text-sm font-medium font-['Noto Sans KR'] leading-tight">다음</div>
            <div className='w-5 h-5 relative'>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomTable
