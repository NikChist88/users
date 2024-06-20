import { Request, Response } from 'express'
import { employeesQueryRepo } from '../repositories'
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
 * @desc Get employees by page size
 * @access Private
 */
export const getEmployees = async (
  req: RequestQuery<{ userId: string }>,
  res: Response<Employees[] | MessageView>
) => {
  try {
    const employees = await employeesQueryRepo.findEmployees(req.query.userId)

    employees.length
      ? res.status(200).json(employees)
      : res.status(404).json({ message: 'Employees not found!' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

/**
 * @route GET /employees/employee?
 * @desc Get employee by ID
 * @access Private
 */
export const getById = async (
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
export const create = async (
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
 * @route POST /employees/addMany
 * @desc Create new employee
 * @access Private
 */
export const createMany = async (
  req: RequestBody<Employees[]>,
  res: Response<Employees[] | MessageView>
) => {
  try {
    const employees = await employeesService.createEmployees(req.body)
    employees !== null
      ? res.status(201).json(employees)
      : res.status(400).json({ message: 'Faild to create employees!' })
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

/**
 * @route PATCH /employees/edit/:id
 * @desc Update employee data
 * @access Private
 */
export const update = async (
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
 * @route REMOVE /employees/delete/:id
 * @desc Delete employee by ID
 * @access Private
 */
export const remove = async (
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
