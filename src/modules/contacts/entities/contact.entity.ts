import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name?: string;

  @Column('text')
  password: string;

  @Column('timestamp')
  birthDate: Date;

  @Column('text', {
    unique: true,
  })
  email?: string;

  @Column('text', {
    default: 'active',
  })
  status?: string;

  @CreateDateColumn({
    default: new Date(),
  })
  created_at: Date;

  @UpdateDateColumn({
    default: new Date(),
  })
  updated_at: Date;
}
