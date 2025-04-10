import { Injectable } from '@nestjs/common';
import { UniversityEntity } from './entities/university.entity';
import { UniversityRepository } from './university.repository';

@Injectable()
export class UniversityService {
  constructor(private readonly universityRepository: UniversityRepository) {}

  findAll(): Promise<UniversityEntity[]> {
    return this.universityRepository.getAllUniversities();
  }
}
