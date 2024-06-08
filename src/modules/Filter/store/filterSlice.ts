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
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    setRoleFilter(state, action: PayloadAction<string>) {
      state.roleFilter = action.payload
    },
    setLimitFilter(state, action: PayloadAction<number>) {
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

export const { setSearchQuery, setRoleFilter, setLimitFilter } =
  filtersSlice.actions
export const { selectSearchQuery, selectRoleFilter, selectLimitFilter } =
  filtersSlice.selectors
export const filtersReducer = filtersSlice.reducer
