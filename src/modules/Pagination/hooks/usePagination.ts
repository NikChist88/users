import {
  setPageNumber,
  selectPageNumber,
  selectPageSize,
} from '../store/paginateSlice'
import { useAppDispatch, useAppSelector } from '@/store'

export const usePagination = (count: number) => {
  const dispatch = useAppDispatch()
  const pageNumber = useAppSelector(selectPageNumber)
  const pageSize = useAppSelector(selectPageSize)
  const totalPages = Math.ceil(count / pageSize)

  const handlePrevPage = () => {
    dispatch(setPageNumber(pageNumber - 1))
  }

  const handleNextPage = () => {
    dispatch(setPageNumber(pageNumber + 1))
  }

  return {
    pageNumber,
    totalPages,
    handlePrevPage,
    handleNextPage,
  }
}
