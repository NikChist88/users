import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  searchQuery: string
  role: string
}

const initialState: InitialStateType = {
  searchQuery: '',
  role: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    setRoleFilter(state, action: PayloadAction<string>) {
      state.role = action.payload
    },
  },
  selectors: {
    selectSearchQuery: (state) => state.searchQuery,
    selectRole: (state) => state.role,
  },
})

export const { setSearchQuery, setRoleFilter } = filtersSlice.actions
export const { selectSearchQuery, selectRole } = filtersSlice.selectors
export const filtersReducer = filtersSlice.reducer
