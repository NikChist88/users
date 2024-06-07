import express from 'express'
import cors from 'cors'
import { usersRouter, authRouter } from './routes'
import * as dotenv from 'dotenv'

dotenv.config()

export const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/users', usersRouter)
app.use('/auth', authRouter)

// listening port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
