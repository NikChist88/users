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
    setCurrentPageAC(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
  selectors: {
    selectCurrentPage: (state) => state.currentPage,
  },
})

export const { setCurrentPageAC } = paginateSlice.actions
export const { selectCurrentPage } = paginateSlice.selectors
export const paginateReducer = paginateSlice.reducer
