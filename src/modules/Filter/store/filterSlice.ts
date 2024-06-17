import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  searchQuery: string
  roleFilter: string
}

const initialState: InitialStateType = {
  searchQuery: '',
  roleFilter: '',
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
  },
  selectors: {
    searchQuery: (state) => state.searchQuery,
    roleFilter: (state) => state.roleFilter,
  },
})

export const { setSearchQuery, setRoleFilter } = filtersSlice.actions
export const { searchQuery, roleFilter } = filtersSlice.selectors
export const filtersReducer = filtersSlice.reducer
