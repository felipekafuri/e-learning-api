import { sessionRouter } from '@modules/users/routes/session.routes'
import { Router } from 'express'
import { usersRouter } from '../../modules/users/routes/users.routes'
const routes = Router()

routes.use(usersRouter)
routes.use(sessionRouter)

export { routes }
