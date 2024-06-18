import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { AppRootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3003',
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as AppRootState).auth.user?.token ||
      localStorage.getItem('token')

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: 'splitApi',
  tagTypes: ['Employees'],
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
