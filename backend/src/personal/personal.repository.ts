import { Injectable } from '@nestjs/common';
import { PersonalEntity } from './entities/personal.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PersonalRepository {
  constructor(
    @InjectRepository(PersonalEntity)
    private readonly repo: Repository<PersonalEntity>,
  ) {}
  getPersonal(): Promise<PersonalEntity[]> {
    return this.repo.find();
  }
}
