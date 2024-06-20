import { useAppDispatch, useAppSelector } from '@/store'
import {
  setPageNumber,
  selectPageNumber,
  selectPageSize,
} from '../store/paginateSlice'

export const usePagination = (allEntries: number) => {
  const dispatch = useAppDispatch()
  const pageNumber = useAppSelector(selectPageNumber)
  const pageSize = useAppSelector(selectPageSize)

  const totalPages = Math.ceil(allEntries / pageSize)
  const firstIndex = (pageNumber - 1) * pageSize
  const lastIndex = firstIndex + pageSize

  const changePage = (newPage: number) => {
    dispatch(setPageNumber(newPage))
  }

  return {
    pageNumber,
    totalPages,
    firstIndex,
    lastIndex,
    changePage,
  }
}
