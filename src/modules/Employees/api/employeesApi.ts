import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Employees } from '@prisma/index'

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  tagTypes: ['Employees'],
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3003',
  }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query<Employees[], void>({
      query: () => ({
        url: 'employees',
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
    getEmployeeById: builder.query<Employees, string>({
      query: (id) => ({
        url: `employees/${id}`,
        method: 'GET',
      }),
    }),
    addEmployee: builder.mutation<Employees, Employees>({
      query: (employee) => ({
        url: 'employees/add',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    updateEmployee: builder.mutation<string, Employees>({
      query: (employee) => ({
        url: `employees/edit/${employee.id}`,
        method: 'PATCH',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    deleteEmployee: builder.mutation<void, string>({
      query: (id) => ({
        url: `employees/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Employees'],
    }),
  }),
})

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeByIdQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi
