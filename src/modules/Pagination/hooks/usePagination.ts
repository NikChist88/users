import { setCurrentPage, сurrentPage } from '../store/paginateSlice'
import { useAppDispatch, useAppSelector } from '@/store'

export const usePagination = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(сurrentPage)

  const handlePrevPage = () => {
    dispatch(setCurrentPage(page - 1))
  }

  const handleNextPage = () => {
    dispatch(setCurrentPage(page + 1))
  }

  return {
    page,
    handlePrevPage,
    handleNextPage,
  }
}
