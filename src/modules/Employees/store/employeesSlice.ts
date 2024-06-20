import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { employeesApi } from '../api/employeesApi'
import { Employees } from '@prisma/prisma-client/'

type InitialState = {
  employees: Employees[] | null
  allEntries: number
}

const initialState: InitialState = {
  employees: null,
  allEntries: 0,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    logout: () => initialState,
    setAllEntries(state, action: PayloadAction<number>) {
      state.allEntries = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      employeesApi.endpoints.getEmployees.matchFulfilled,
      (state, action) => {
        state.employees = action.payload
      }
    )
  },
  selectors: {
    selectEmployees: (state) => state.employees,
    selectAllEntries: (state) => state.allEntries,
  },
})

export const employeesReducer = employeesSlice.reducer
export const { setAllEntries } = employeesSlice.actions
export const { selectEmployees, selectAllEntries } = employeesSlice.selectors
