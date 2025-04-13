import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IFeedbacks } from '../model/feedbacks.type';

@Entity('feedbacks')
export class FeedbackEnitiy implements IFeedbacks {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  date: Date;
  @Column({ nullable: false })
  description: string;
  @Column({ nullable: false })
  position: string;
  @Column({ nullable: false })
  companyTitle: string;
  @Column({ nullable: false })
  logo: string;
}
