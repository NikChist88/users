import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  searchQuery: string
  roleFilter: string
  limitFilter: number
}

const initialState: InitialStateType = {
  searchQuery: '',
  roleFilter: '',
  limitFilter: 10,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQueryAC(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    setRoleFilterAC(state, action: PayloadAction<string>) {
      state.roleFilter = action.payload
    },
    setLimitFilterAC(state, action: PayloadAction<number>) {
      state.limitFilter = action.payload
    },
  },
  selectors: {
    selectSearchQuery: (state) => state.searchQuery,
    selectRoleFilter: (state) => state.roleFilter,
    selectLimitFilter: (state) => state.limitFilter,
  },
  extraReducers: (builder) => {},
})

export const { setSearchQueryAC, setRoleFilterAC, setLimitFilterAC } =
  filtersSlice.actions
export const { selectSearchQuery, selectRoleFilter, selectLimitFilter } =
  filtersSlice.selectors
export const filtersReducer = filtersSlice.reducer
