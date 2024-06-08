import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Login, Register, Response } from '@/types'
import { AppRootState } from '@/store'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
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
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Response, Login>({
      query: (loginData) => ({
        url: 'auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
    register: builder.mutation<Response, Register>({
      query: (registerData) => ({
        url: 'auth/register',
        method: 'POST',
        body: registerData,
      }),
    }),
    current: builder.query<Response, void>({
      query: () => ({
        url: 'auth/current',
        method: 'GET',
      }),
    }),
  }),
})

export const { useLoginMutation, useCurrentQuery } = authApi