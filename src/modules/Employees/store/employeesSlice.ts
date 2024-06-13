import { createSlice } from '@reduxjs/toolkit'
import { employeesApi } from '../api/employeesApi'
import { Employees } from '../../../../server/node_modules/prisma/prisma-client/index'

type InitialState = {
  employees: Employees[] | null
}

const initialState: InitialState = {
  employees: null,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      employeesApi.endpoints.getAllEmployees.matchFulfilled,
      (state, action) => {
        state.employees = action.payload
      }
    )
  },
  selectors: {
    selectEmployees: (state) => state.employees,
  },
})

export const employeesReducer = employeesSlice.reducer
export const { selectEmployees } = employeesSlice.selectors
