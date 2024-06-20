import { Router } from 'express'
import {
  getById,
  create,
  createMany,
  update,
  remove,
  getEmployees,
} from '../controllers'

export const employeesRouter = Router()

employeesRouter.get('/', getEmployees)
employeesRouter.get('/employee/', getById)
employeesRouter.post('/add', create)
employeesRouter.post('/addMany', createMany)
employeesRouter.patch('/edit/:id', update)
employeesRouter.delete('/delete/:id', remove)
