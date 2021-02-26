import { UserRepository } from '@modules/users/repositories/UserRepository'
import { getCustomRepository } from 'typeorm'
import { ICreateUserDTO } from '../dtos/CreateUsersDTO'
import { User } from '../entities/User'
import { hash } from 'bcryptjs'

class CreateUserService {
  public async execute({
    email,
    password,
    name
  }: ICreateUserDTO): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)

    const userExists = await userRepository.findOne({ where: { email } })

    if (userExists) {
      throw new Error('User already exists')
    }

    const hashedPassword = await hash(password, 8)

    const user = await userRepository.createUser({
      email,
      password: hashedPassword,
      name
    })

    return user
  }
}

export { CreateUserService }
