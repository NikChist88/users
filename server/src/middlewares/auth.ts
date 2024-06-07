import { Request, Response, NextFunction } from 'express'
import { prisma } from '../prisma/prisma-client'
import jwt from 'jsonwebtoken'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization?.split(' ')[1]
    const secret = process.env.JWT_SECRET

    if (!token || !secret) {
      throw new Error('Token or secret key not found!')
    }

    const decoded = jwt.verify(token, secret) as { id: string }

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    })

    if (!user) {
      throw new Error('User not found!')
    }

    req.body.user = user

    next()
  } catch {
    res.status(401).json({ message: 'Not authorized!' })
  }
}
