import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  currentPage: number
}

const initialState: InitialStateType = {
  currentPage: 0,
}

const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
  selectors: {
    сurrentPage: (state) => state.currentPage,
  },
})

export const { setCurrentPage } = paginateSlice.actions
export const { сurrentPage } = paginateSlice.selectors
export const paginateReducer = paginateSlice.reducer
