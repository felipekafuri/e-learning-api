import { Router } from 'express'
import { UserController } from '../controllers/UserControllers'

const usersRouter = Router()
const userController = new UserController()

usersRouter.post('/users', userController.create)

export { usersRouter }
