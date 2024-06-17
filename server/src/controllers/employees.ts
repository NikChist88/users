import { Request, Response } from 'express'
import { employeesRepo, employeesQueryRepo } from '../repositories'
import { employeesService } from '../services/employees-service'
import {
  RequestParams,
  RequestBody,
  RequestParamsAndBody,
  RequestQuery,
} from '../types'
import { MessageView } from '../views/employees'
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
    const employees = await employeesQueryRepo.findAll()
    employees
      ? res.status(200).json(employees)
      : res.status(404).json({ message: 'Employees not found!' })
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

/**
 * @route GET /employees/employee
 * @desc Get employee by ID
 * @access Private
 */
export const getEmployeeById = async (
  req: RequestQuery<{ id: string }>,
  res: Response<Employees | MessageView>
) => {
  try {
    const employee = await employeesQueryRepo.findById(req.query.id)
    employee
      ? res.status(200).json(employee)
      : res.status(404).json({ message: 'Employees not found!' })
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
    const employee = await employeesService.createEmployee(req.body)
    employee
      ? res.status(201).json(employee)
      : res.status(400).json({ message: 'Faild to create employee!' })
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
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
    const isUpdated = await employeesService.updateEmployee(
      req.params.id,
      req.body
    )
    
    isUpdated
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
    const isDeleted = await employeesService.deleteEmployee(req.params.id)

    isDeleted
      ? res.status(200).json({ message: `Employee deleted!` })
      : res.status(404).json({ message: 'Employee not found!' })
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}
