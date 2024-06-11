import { Request, Response } from 'express'
import { prisma } from '../prisma/prisma-client'
import { Employees } from '@prisma/client'

// get all employees
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await prisma.employees.findMany()
    res.status(200).json(employees)
    return employees
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// get employee by id
export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await prisma.employees.findFirst({
      where: { id: req.params.id },
    })

    if (!employee) {
      res.status(404).json({ message: 'Employee not found!' })
    } else {
      res.status(200).json(employee)
      return employee
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// create employee
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const data: Employees = req.body
    const user = await prisma.user.findFirst({ where: { id: data.userId } })

    if (user) {
      const employee = await prisma.employees.create({
        data: {
          ...data,
          userId: user.id,
        },
      })
      res.status(201).json(employee)
      return employee
    } else {
      res.status(400).json({message: 'User of employees not found!'})
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to create employee!' })
  }
}

// delete employee
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    if (!id) {
      res.status(404).json({ message: 'Employee not found!' })
    } else {
      await prisma.employees.delete({ where: { id } })
      res.status(200).json({ message: 'Employee deleted!' })
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

// update employee
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee: Employees = req.body

    if (employee) {
      await prisma.employees.update({
        where: { id: employee.id },
        data: employee,
      })
      res.status(200).json({ message: 'Employee data updated!' })
    } else {
      res.status(404).json({ message: 'Employee not found!' })
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}
