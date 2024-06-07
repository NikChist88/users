import express from 'express'
import cors from 'cors'
import { usersRouter, authRouter } from './routes'

export const app = express()
const port = 3003

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/users', usersRouter)
app.use('/auth', authRouter)

// listening port
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
