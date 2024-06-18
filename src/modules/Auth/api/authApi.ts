import { Auth } from '@/types'
import { api } from '@store/api'

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Response, Auth>({
      query: (loginData) => ({
        url: 'auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
    register: builder.mutation<Response, Auth>({
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

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } =
  authApi
