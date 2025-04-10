import { Test, TestingModule } from '@nestjs/testing';
import { UniversityController } from '../university.controller';
import { UniversityService } from '../university.service';
import { testUniversity } from './university.mock';

describe('University Controller', () => {
  let universityService: UniversityService;
  let universityController: UniversityController;
  let getAllUniversitiesMock: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversityController],
      providers: [
        {
          provide: UniversityService,
          useValue: {
            findAll: jest.fn(() => {
              return [testUniversity];
            }),
            getOneUniversity: jest.fn(() => testUniversity),
            createUniversity: jest.fn(() => testUniversity),
            deleteUniversity: jest.fn(),
          },
        },
      ],
    }).compile();

    universityService = module.get<UniversityService>(UniversityService);
    universityController =
      module.get<UniversityController>(UniversityController);

    // Использование шпиона для findAll
    getAllUniversitiesMock = jest.spyOn(universityService, 'findAll');
  });

  it('should be defined', () => {
    expect(universityController).toBeDefined();
  });

  it('should return array of universities', () => {
    const universities = universityController.findAll();
    expect(Array.isArray(universities)).toBe(true);
  });

  it('should call getAllUniversities once', () => {
    universityController.findAll();
    expect(getAllUniversitiesMock).toHaveBeenCalledTimes(1);
  });

  it('should call getAllUniversities and return testUniversities', () => {
    const universities = universityController.findAll();
    expect(universities).toEqual([testUniversity]);
  });
});
