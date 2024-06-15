import { Request, Response } from 'express'
import { employeesRepo } from '../repositories/employees.repo'
import { RequestParams, RequestBody, RequestParamsAndBody } from '../types'
import { MessageView } from '../views/employees.view'
import { Employees } from '@prisma/client'

/**
 * @route GET /employees
 * @desc Get all employees
 * @access Private
 */
export const getAllEmployees = async (
  req: Request,
  res: Response<Employees[] | MessageView>
) => {
  try {
    const employees = await employeesRepo.findAll()
    employees
      ? res.status(200).json(employees)
      : res.status(404).json({ message: 'Employees not found!' })
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

/**
 * @route GET /employees/:id
 * @desc Get employee by ID
 * @access Private
 */
export const getEmployeeById = async (
  req: RequestParams<{ id: string }>,
  res: Response<Employees | MessageView>
) => {
  try {
    const employee = await employeesRepo.findById(req.params.id)
    employee
      ? res.status(200).json(employee)
      : res.status(404).json({ message: 'Employee not found!' })
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

/**
 * @route POST /employees/add
 * @desc Create new employee
 * @access Private
 */
export const createEmployee = async (
  req: RequestBody<Employees>,
  res: Response<Employees | MessageView>
) => {
  try {
    const employee = await employeesRepo.create(req.body)
    res.status(201).json(employee)
  } catch {
    res.status(500).json({ message: 'Failed to create employee!' })
  }
}

/**
 * @route PATCH /employees/edit/:id
 * @desc Update employee data
 * @access Private
 */
export const updateEmployee = async (
  req: RequestParamsAndBody<{ id: string }, Employees>,
  res: Response<MessageView>
) => {
  try {
    const employee = await employeesRepo.update(req.params.id, req.body)
    employee
      ? res.status(200).json({ message: 'Employee data updated!' })
      : res.status(404).json({ message: 'Employee not found!' })
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

/**
 * @route DELETE /employees/:id
 * @desc Delete employee by ID
 * @access Private
 */
export const deleteEmployee = async (
  req: RequestParams<{ id: string }>,
  res: Response<MessageView>
) => {
  try {
    const employee = await employeesRepo.delete(req.params.id)
    employee
      ? res.status(200).json({
          message: `Employee ${employee.firstName} ${employee.lastName} deleted!`,
        })
      : res.status(404).json({ message: 'Employee not found!' })
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}
