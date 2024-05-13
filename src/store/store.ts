import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { usersApi } from './usersApi'
import { filtersReducer } from '../modules/Filters'
import { paginateReducer } from '../modules/Pagination'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  filters: filtersReducer,
  paginate: paginateReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware().concat(usersApi.middleware),
})
