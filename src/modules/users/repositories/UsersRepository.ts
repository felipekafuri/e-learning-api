import { EntityRepository, Repository } from 'typeorm'
import ICreateUserDTO from '../dtos/CreateUsersDTO'
import User from '../entities/User'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser({ email, password, name }: ICreateUserDTO): Promise<User> {
    const user = this.create({ email, password, name })

    await this.save(user)

    return user
  }
}

export default UsersRepository
