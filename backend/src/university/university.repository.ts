import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UniversityEntity } from './entities/university.entity';

@Injectable()
export class UniversityRepository {
  constructor(
    @InjectRepository(UniversityEntity)
    private readonly repo: Repository<UniversityEntity>,
  ) {}
  getAllUniversities(): Promise<UniversityEntity[]> {
    console.log('inside repo');
    return this.repo.find();
  }
  /*   findOneById(id: number) {
    const targetUniversityEntity = universities.find(
      (UniversityEntity) => UniversityEntity.id === id,
    );
    return targetUniversityEntity === undefined
      ? `UniversityEntity with id:${id} doesn't exist in DB`
      : targetUniversityEntity;
  }
  createUniversityEntity(UniversityEntity: UniversityEntity) {
    const maxId = Math.max(
      ...universities.map((UniversityEntity) =>
        UniversityEntity.id ? UniversityEntity.id : NaN,
      ),
    );
    UniversityEntity.id = maxId;
    universities.push(UniversityEntity);
    const newUniversityEntity = universities[universities.length - 1];

    return newUniversityEntity;
  }
  deleteUniversityEntity(id: number) {
    const UniversityEntityIdx = universities.findIndex(
      (UniversityEntity) => UniversityEntity.id === id,
    );
    universities.splice(UniversityEntityIdx, 1);
    return universities;
  }
  updateById(id: number, UniversityEntity: UniversitiesType) {
    console.log(`id`, id);
    const targetIdx = universities.findIndex(
      (UniversityEntity) => UniversityEntity.id === id,
    );
    universities.splice(targetIdx, 1, UniversityEntity);
    return universities.find((UniversityEntity) => (UniversityEntity.id = id));
  } */
}
