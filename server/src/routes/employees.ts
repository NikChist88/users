import { Router } from 'express'
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers'

export const employeesRouter = Router()

employeesRouter.get('/', getAllEmployees)
employeesRouter.get('/:id', getEmployeeById)
employeesRouter.post('/add', createEmployee)
employeesRouter.put('/edit/:id', updateEmployee)
employeesRouter.delete('/:id', deleteEmployee)
