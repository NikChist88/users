import { Request, Response } from 'express'

// login
export const login = (req: Request, res: Response) => {
  res.send('login')
}

// register
export const register = (req: Request, res: Response) => {
  res.send('register')
}

// current
export const current = (req: Request, res: Response) => {
  res.send('current')
}