import { Request, Response } from 'express'
import { prisma } from '../prisma/prisma-client'
import { db } from '../data/data'

// get users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.userData.findMany()
    res.status(200).json(users)
    return users
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// get user by id
export const getUserById = (req: Request, res: Response) => {
  try {
    const user = prisma.userData.findFirst({ where: { id: req.params.id } })

    if (!user) {
      res.status(404).json({ message: 'User not found!' })
    } else {
      res.status(200).json(user)
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// create user
export const createUser = async (req: Request, res: Response) => {
  try {
    await prisma.userData.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        company: req.body.company,
        country: req.body.country,
      },
    })

    res.status(201).json({ message: 'User created!' })
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = prisma.userData.findFirst({ where: { id: req.params.id } })

    if (!user) {
      res.status(404).json({ message: 'User not found!' })
    } else {
      await prisma.userData.delete({ where: { id: req.params.id } })
      res.status(200).json({ message: 'User deleted!' })
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.userData.findFirst({
      where: { id: req.params.id },
    })

    if (user) {
      await prisma.userData.update({
        where: { id: user.id },
        data: {
          name: req.body.name,
          email: req.body.email,
          role: req.body.role,
          company: req.body.company,
          country: req.body.country,
        },
      })
      res.status(200).json({ message: 'User data updated!' })
    } else {
      res.status(404).json({ message: 'User not found!' })
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}
