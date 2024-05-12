import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { usersApi } from './usersApi'
import { filtersReducer } from '../modules/Filters'
import { paginateReducer } from '../modules/Pagination'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  filters: filtersReducer,
  paginate: paginateReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware().concat(usersApi.middleware),
})

export type AppRootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppRootState>()
