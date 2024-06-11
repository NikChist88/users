import express from 'express'
import cors from 'cors'
import { employeesRouter, authRouter } from './routes'
import * as dotenv from 'dotenv'

dotenv.config()

export const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/employees', employeesRouter)
app.use('/auth', authRouter)

// listening port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
