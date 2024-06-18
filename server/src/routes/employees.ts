import { Router } from 'express'
import {
  getById,
  getEmployeesCount,
  create,
  createMany,
  update,
  remove,
  getEmployees,
} from '../controllers'

export const employeesRouter = Router()

employeesRouter.get('/limit', getEmployees)
employeesRouter.get('/employee/', getById)
employeesRouter.get('/count', getEmployeesCount)
employeesRouter.post('/add', create)
employeesRouter.post('/addMany', createMany)
employeesRouter.patch('/edit/:id', update)
employeesRouter.delete('/delete/:id', remove)
