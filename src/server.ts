import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import { AppError } from './shared/errors/AppError'
import { routes } from './shared/routes'
import './database'

const app = express()
app.use(express.json())
app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message
      })
    }

    console.error(err)

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    })
  }
)

app.listen(3333, () => {
  console.log('Server started on http://localhost:3333 🚀')
})
