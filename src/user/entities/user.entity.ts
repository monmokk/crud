import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column({length: 60})
  email:string;

  @Column({length:50})
  nickname: string;

  @Column({length: 50})
  password: string;

  @Column({ length: 60})
  signUpVerifyToken: string;
}
