import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Lottery {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column('int', {
    array: true,
  })
  winningNumbers: number[];

  @Column('date')
  drawDate: Date;

  @Column('text', {
    nullable: true,
  })
  prize?: string;

  @Column('text', {
    default: 'Pending',
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
