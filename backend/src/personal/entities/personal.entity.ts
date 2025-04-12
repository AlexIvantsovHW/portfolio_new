import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IPersonal } from '../model/personal.type';

@Entity('personal')
export class PersonalEntity implements IPersonal {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ nullable: false })
  username: string;
  @Column({ nullable: false })
  surname: string;
  @Column({ nullable: false })
  age: number;
  @Column({ nullable: false })
  city: string;
  @Column({ nullable: false })
  country: string;
  @Column({ nullable: false })
  yearExperince: number;
  @Column({ nullable: false })
  description: string;
}
