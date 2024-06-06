import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '@/types'

const localhost = 'http://localhost:3001'
const mockapi = 'https://661c178ae7b95ad7fa69ab18.mockapi.io/api/v1/'

export const usersApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: mockapi,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => `users`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              'Users',
            ]
          : ['Users'],
    }),
    addUser: builder.mutation<UserType, UserType>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<UserType, [id: string, data: UserType]>({
      query: ([id, data]) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi
