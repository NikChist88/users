import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { usersApi } from '@/api/usersApi'
import { authApi } from '@/api/authApi'
import { filtersReducer } from '@/modules/Filter'
import { paginateReducer } from '@/modules/Pagination'
import { authReducer, listenerMiddleware } from '@/modules/Auth'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  filters: filtersReducer,
  paginate: paginateReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware()
      .concat(usersApi.middleware, authApi.middleware)
      .prepend(listenerMiddleware.middleware),
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
