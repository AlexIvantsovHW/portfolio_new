import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IContact } from '../module/contact.type';
@Entity('contact')
export class ContactEntity implements IContact {
  @PrimaryColumn({ type: 'int' })
  id: number;
  @Column({ nullable: false })
  whatsApp: number;
  @Column({ nullable: false })
  telegram: number;
  @Column({ nullable: false })
  linkedIn: string;
  @Column({ nullable: false })
  phone: number;
  @Column({ nullable: false })
  email: string;
  @Column({ nullable: false })
  cv: string;
  @Column({ nullable: false })
  website: string;
}
