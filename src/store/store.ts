import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authReducer, listenerMiddleware } from '@/modules/Auth'
import { employeesReducer } from '@/modules/Employees'
import { filtersReducer } from '@/modules/Filter'
import { paginateReducer } from '@/modules/Pagination'
import { api } from './api'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  employees: employeesReducer,
  filters: filtersReducer,
  paginate: paginateReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
