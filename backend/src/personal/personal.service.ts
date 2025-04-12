import { Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { PersonalEntity } from './entities/personal.entity';
import { PersonalRepository } from './personal.repository';

@Injectable()
export class PersonalService {
  constructor(private readonly personalRepository: PersonalRepository) {}
  create(createPersonalDto: CreatePersonalDto) {
    return 'This action adds a new personal';
  }

  findAll(): Promise<PersonalEntity[]> {
    return this.personalRepository.getPersonal();
  }

  findOne(id: number) {
    return `This action returns a #${id} personal`;
  }

  update(id: number, updatePersonalDto: UpdatePersonalDto) {
    return `This action updates a #${id} personal`;
  }

  remove(id: number) {
    return `This action removes a #${id} personal`;
  }
}
