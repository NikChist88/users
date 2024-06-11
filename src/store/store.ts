import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { employeesApi } from '@/api/employeesApi'
import { authApi } from '@/modules/Auth/api/authApi'
import { authReducer, listenerMiddleware } from '@/modules/Auth'
import { employeesReducer } from '@/modules/Employees'
import { filtersReducer } from '@/modules/Filter'
import { paginateReducer } from '@/modules/Pagination'

const rootReducer = combineReducers({
  [employeesApi.reducerPath]: employeesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  employees: employeesReducer,
  filters: filtersReducer,
  paginate: paginateReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware()
      .concat(employeesApi.middleware, authApi.middleware)
      .prepend(listenerMiddleware.middleware),
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
