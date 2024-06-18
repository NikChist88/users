import { Request, Response } from 'express'
import { prisma } from '../prisma/prisma-client'
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password is required!' })
    }

    const user = await prisma.user.findFirst({ where: { email } })

    const isPasswordCorrect =
      user && (await bcrypt.compare(password, user.password))

    const secret = process.env.JWT_SECRET

    if (user && isPasswordCorrect && secret) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
      })
    } else {
      return res.status(400).json({ message: 'Wrong email or password!' })
    }
  } catch {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

// register
export const register = async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields is required!' })
    }

    const registeredUser = await prisma.user.findFirst({
      where: { email },
    })

    if (registeredUser) {
      return res
        .status(400)
        .json({ message: 'A user with this email already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const secret = process.env.JWT_SECRET
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    })

    if (user && secret) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
      })
    } else {
      return res.status(400).json({ message: 'Failed to create user!' })
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// current
export const current = async (req: Request, res: Response) => {
  return res.status(200).json(req.body.user)
}
