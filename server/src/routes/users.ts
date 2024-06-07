import { Router } from 'express'
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers'

export const usersRouter = Router()

usersRouter.get('/', getUsers)
usersRouter.get('/:id', getUserById)
usersRouter.post('/', createUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.put('/:id', updateUser)
