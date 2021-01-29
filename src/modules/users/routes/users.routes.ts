import { Router } from 'express'
import CreateUsersService from '../services/CreateUsersService'

const usersRouter = Router()

usersRouter.post('/users', async (req, res) => {
  const { name, email, password } = req.body

  const createUser = new CreateUsersService()

  const user = await createUser.execute({ email, password, name })

  return res.json(user)
})

export default usersRouter
