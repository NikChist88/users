import { Router } from 'express'
import { login, register, current } from '../controllers'
import { auth } from '../middleware/auth'

export const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/register', register)
authRouter.get('/current', auth, current)