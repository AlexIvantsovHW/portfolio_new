import { Test, TestingModule } from '@nestjs/testing';
import { UniversityService } from '../university.service';

import { UniversityRepository } from '../university.repository';
//import { University } from '../entities/university.entity';
//import { universities } from '../university-data';

describe('UniversityService', () => {
  let service: UniversityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversityService, UniversityRepository],
    }).compile();

    service = module.get<UniversityService>(UniversityService);
  });
  /*   const createUniversity :University = {
    companyTitle: 'National Research Tomsk Polytechnic University',
    title: 'Bachelor degree',
    link: 'www.itransition.com',
    companyLogo: 'www.itransition.com',
    certificate: 'www.itransition.com',
    description: 'Power and Steam Engineering',
    startAt: '01.01.2012',
    endAt: '01.01.2016',
  }; */
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*   it('should create a new university', () => {
    expect(service.create(createUniversity)).toBe(
      universities[universities.length - 1],
    );
  });
  it('should return array of universities', () => {
    expect(Array.isArray(service.findAll())).toBe(true);
  });
  it('should include a new university in the final array', () => {
    expect(service.findAll().includes(createUniversity)).toBe(true);
  });
  it('should has right keys', () => {
    const checkUniversityType = { id: 1 };
    Object.assign(checkUniversityType, createUniversity);
    expect(Object.keys(service.findAll()[0])).toEqual(
      Object.keys(checkUniversityType),
    );
  });
  it('should add a new university with unique and max id', () => {
    const university2: University = {
      companyTitle: 'Test2 ',
      title: 'Test2',
      link: 'www.Test2.com',
      companyLogo: 'www.Test2.com',
      certificate: 'www.Test2.com',
      description: 'Power and Steam Engineering',
      startAt: '01.01.2012',
      endAt: '01.01.2016',
    };
    expect(
      service.create(university2).id ===
        universities
          .filter((u) => u.id !== undefined)
          .sort((a, b) => b.id! - a.id!)[0]?.id,
    ).toBe(true);
  });
  it('should find university with specific id', () => {
    expect(service.findOne(1) != undefined).toBe(true);
  });
  it('should  not find university with  id equals 9999', () => {
    expect(service.findOne(9999) === University with id:9999 doesn't exist in DB").toBe(true);
  }); */
});
