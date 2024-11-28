/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

interface TableProps<T> {
  fetchData: (page: number, itemsPerPage: number) => Promise<{ data: T[]; totalItems: number }>
  columns: string[]
  renderRow: (item: T) => React.ReactNode
  itemsPerPage?: number
}

const CustomTable = <T,>({ fetchData, columns, renderRow, itemsPerPage = 10 }: TableProps<T>) => {
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
    <div className='overflow-x-auto w-full p-4 rounded-lg shadow-lg'>
      <table className='w-full text-sm text-left text-gray-400'>
        <thead className='text-sm uppercase dark:text-white text-white font-bold'>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className='px-6 py-3'>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='dark:text-white border-b border-gray-700 hover:bg-gray-700'>
              {renderRow(item)}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className='flex justify-center items-center py-4 text-white'>
          <ReactPaginate
            previousLabel={null}
            nextLabel={null}
            breakLabel={'...'}
            pageCount={totalPages}
            onPageChange={handlePageClick}
            containerClassName={'flex space-x-2 items-center justify-center w-full'}
            pageClassName={'w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-gray-600 rounded-full'}
            initialPage={currentPage}
            activeClassName={'bg-gray-700 !text-blue-600'}
            disabledClassName={'text-gray-500 cursor-not-allowed'}
          />
        </div>
      )}
    </div>
  )
}

export default CustomTable
