import { Request, Response } from 'express'
import { db } from '../data/data'
import { nanoid } from '@reduxjs/toolkit'

// get users
export const getUsers = (req: Request, res: Response) => {
  res.send(db.users)
}

// get user by id
export const getUserById = (req: Request, res: Response) => {
  const user = db.users.find((u) => u.id === req.params.id)

  if (!user) return res.sendStatus(404)
  res.status(200).json(user)
}

// create user
export const createUser = (req: Request, res: Response) => {
  const user = {
    id: nanoid().slice(0, 6),
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    company: req.body.company,
    country: req.body.country,
  }

  db.users.push(user)
  res.status(201).json({ message: 'User created!' })
}

// delete user
export const deleteUser = (req: Request, res: Response) => {
  const user = db.users.find((u) => u.id === req.params.id)

  if (!user) {
    res.status(404).json({ message: 'User not found!' })
  } else {
    db.users = db.users.filter((user) => user.id !== req.params.id)
    res.status(200).json({ message: 'User deleted!' })
  }
}

// update user
export const updateUser = (req: Request, res: Response) => {
  const user = db.users.find((u) => u.id === req.params.id)

  if (!user) {
    res.sendStatus(404)
  }  else {
    user.name = req.body.name
    user.email = req.body.email
    user.role = req.body.role
    user.company = req.body.company
    user.country = req.body.country
    res.status(200).json({ message: 'User data updated!' })
  }
}
