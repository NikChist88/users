import { setCurrentPageAC, selectCurrentPage } from '../store/paginateSlice'
import { useAppDispatch, useAppSelector } from '@/store'

export const usePagination = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectCurrentPage)

  const handlePrevPage = () => {
    dispatch(setCurrentPageAC(currentPage - 1))
  }

  const handleNextPage = () => {
    dispatch(setCurrentPageAC(currentPage + 1))
  }

  return {
    currentPage,
    handlePrevPage,
    handleNextPage,
  }
}
