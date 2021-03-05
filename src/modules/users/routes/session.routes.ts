import { Router } from 'express'
import { SessionsController } from '../controllers/SessionController'

const sessionRouter = Router()
const sessionsController = new SessionsController()

sessionRouter.post('/sessions', sessionsController.create)

export { sessionRouter }
