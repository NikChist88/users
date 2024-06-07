import { Router } from 'express'
import { login, register, current } from '../controllers'

export const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/register', register)
authRouter.get('/current', current)