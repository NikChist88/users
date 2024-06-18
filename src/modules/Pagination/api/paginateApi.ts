import { api } from '@store/api'

export const paginateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeesCount: builder.query<number, string>({
      query: (userId) => ({
        url: `employees/count?userId=${userId}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetEmployeesCountQuery } = paginateApi
