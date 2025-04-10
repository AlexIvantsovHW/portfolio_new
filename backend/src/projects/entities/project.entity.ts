import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IProjects } from '../module/projects.interface';
@Entity('projects')
export class ProjectEntity implements IProjects {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  startAt: string;

  @Column({ nullable: false })
  endAt: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: false })
  logo: string;
}
