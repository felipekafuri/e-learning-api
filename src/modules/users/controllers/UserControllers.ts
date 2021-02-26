import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'
import * as yup from 'yup'

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const scheme = yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup.string().email().required('E-mail is required'),
      password: yup
        .string()
        .required('Password is required')
        .min(5, 'Minimum 5 characters')
    })
    try {
      await scheme.validate(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ errors: err.errors })
    }

    const createUser = new CreateUserService()

    const user = await createUser.execute({ email, password, name })

    return response.json(user)
  }
}

export { UserController }
