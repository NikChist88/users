import express from 'express'
import cors from 'cors'
import { usersRouter } from './routes/users'

export const app = express()
const port = 3003

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/users', usersRouter)

// listening port
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
