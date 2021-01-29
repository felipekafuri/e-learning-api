import UsersRepository from '@modules/users/repositories/UsersRepository'
import { getCustomRepository } from 'typeorm'
import ICreateUserDTO from '../dtos/CreateUsersDTO'
import User from '../entities/User'

class CreateUsersService {
  public async execute({
    email,
    password,
    name
  }: ICreateUserDTO): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)

    const userExists = await usersRepository.findOne({ where: { email } })

    if (userExists) {
      throw new Error('User already exists')
    }

    const user = await usersRepository.createUser({ email, password, name })

    return user
  }
}

export default CreateUsersService
