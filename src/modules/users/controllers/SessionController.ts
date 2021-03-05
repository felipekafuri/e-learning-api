import { classToClass } from 'class-transformer'
import { Request, Response } from 'express'
import * as yup from 'yup'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const scheme = yup.object().shape({
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

    const authenticateUser = new AuthenticateUserService()

    const { token, user } = await authenticateUser.execute({ email, password })

    return response.json(classToClass({ user, token }))
  }
}

export { SessionsController }
