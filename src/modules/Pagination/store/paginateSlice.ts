import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  pageSize: number
  pageNumber: number
}

const initialState: InitialStateType = {
  pageSize: 5,
  pageNumber: 1,
}

const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload
    },
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload
    },
  },
  selectors: {
    selectPageSize: (state) => state.pageSize,
    selectPageNumber: (state) => state.pageNumber,
  },
})

export const { setPageSize, setPageNumber } = paginateSlice.actions
export const { selectPageSize, selectPageNumber } = paginateSlice.selectors
export const paginateReducer = paginateSlice.reducer
