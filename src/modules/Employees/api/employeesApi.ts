import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Employee } from '@/types'

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  tagTypes: ['Employees'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3003/',
  }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query<Employee[], void>({
      query: () => `employees`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Employees' as const, id })),
              'Employees',
            ]
          : ['Employees'],
    }),
    getEmployeeById: builder.query<Employee, string>({
      query: (id) => `employees/${id}`,
    }),
    addEmployee: builder.mutation<Employee, Employee>({
      query: (employee) => ({
        url: 'employees/add',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    updateEmployee: builder.mutation<string, Employee>({
      query: (employee) => ({
        url: `employees/edit/${employee.id}`,
        method: 'PUT',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    deleteEmployee: builder.mutation<void, string>({
      query: (id) => ({
        url: `employees/${id}`,
        method: 'DELETE',
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
