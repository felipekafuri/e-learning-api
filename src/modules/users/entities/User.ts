import { Exclude } from 'class-transformer'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Exclude()
  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export { User }
