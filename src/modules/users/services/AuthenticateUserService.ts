import { AppError } from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import { UserRepository } from '../repositories/UserRepository'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import auth from '@config/auth'

interface IRequestDTO {
  email: string
  password: string
}

interface IResponseDTO {
  token: string
  user: User
}

class AuthenticateUserService {
  public async execute({
    email,
    password
  }: IRequestDTO): Promise<IResponseDTO> {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne({ where: { email } })

    if (!user) {
      throw new AppError('User does not exists')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Wrong email/password combination')
    }

    const { expiresIn, secret } = auth.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return {
      user,
      token
    }
  }
}

export { AuthenticateUserService }
