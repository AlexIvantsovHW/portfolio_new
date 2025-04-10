import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUniversity } from '../model/university.interface';

@Entity('universities')
export class UniversityEntity implements IUniversity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ nullable: true })
  companyTitle: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  link: string;

  @Column({ nullable: true })
  companyLogo: string;

  @Column({ nullable: true })
  certificate: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  startAt: string;

  @Column({ nullable: true })
  endAt: string;
}
