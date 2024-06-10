import { Router } from 'express'
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers'

export const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUserById)
usersRouter.post('/', createUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.put('/:id', updateUser)
