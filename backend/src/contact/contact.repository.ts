import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ContactRepository {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly repo: Repository<ContactEntity>,
  ) {}
  getAllContact(): Promise<ContactEntity[]> {
    return this.repo.find();
  }
}
