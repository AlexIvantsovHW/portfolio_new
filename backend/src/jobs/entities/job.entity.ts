import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IJobs } from '../module/jobs.interface';
@Entity('jobs')
export class JobEntity implements IJobs {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ nullable: false })
  companyTitle: string;

  @Column({ nullable: false })
  startAt: string;

  @Column({ nullable: false })
  endAt: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  jobTitle: string;

  @Column({ nullable: false, type: 'int' })
  software_id: number; /*  {
    db: { title: string; img: string }[];
    API: { title: string; img: string }[];
    fronentd: { title: string; img: string }[];
    backend: { title: string; img: string }[];
    UI: { title: string; img: string }[];
    others: { title: string; img: string }[];
  }; */
}
