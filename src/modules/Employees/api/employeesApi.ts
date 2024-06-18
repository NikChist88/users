import { Employees } from '@prisma/client'
import { api } from '@store/api'

export const employeesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<
      Employees[],
      [pageSize: number, pageNumber: number, userId: string]
    >({
      query: ([pageSize, pageNumber, userId]) => ({
        url: `employees/limit?pageSize=${pageSize}&pageNumber=${pageNumber}&userId=${userId}`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Employees' as const, id })),
              'Employees',
            ]
          : ['Employees'],
    }),
    getById: builder.query<Employees, string>({
      query: (id) => ({
        url: `employees/employee?id=${id}`,
        method: 'GET',
      }),
    }),
    create: builder.mutation<Employees, Employees>({
      query: (employee) => ({
        url: 'employees/add',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    update: builder.mutation<string, Employees>({
      query: (employee) => ({
        url: `employees/edit/${employee.id}`,
        method: 'PATCH',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    delete: builder.mutation<void, string>({
      query: (id) => ({
        url: `employees/delete/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Employees'],
    }),
  }),
})

export const {
  useGetEmployeesQuery,
  useGetByIdQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
} = employeesApi
