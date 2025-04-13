import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
@Injectable()
export class ContactRepository {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly repo: Repository<ContactEntity>,
  ) {}
  getAllContact(): Promise<ContactEntity[]> {
    return this.repo.find();
  }
  createContact(createContactDto: CreateContactDto) {
    const create = this.repo.create(createContactDto);
    return this.repo.save(create);
  }
}
