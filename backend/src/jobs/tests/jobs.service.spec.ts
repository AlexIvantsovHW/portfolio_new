import { Test, TestingModule } from '@nestjs/testing';
import { JobsController } from '../jobs.controller';
import { JobsService } from '../jobs.service';
import { testJobs } from './jobs.mock';

describe('Jobs service test', () => {
  let jobsService: JobsService;
  let jobsController: JobsController;
  let getAllJobsMock: jest.SpyInstance;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [
        {
          provide: JobsService,
          useValue: {
            findAllJobs: jest.fn(() => {
              return [testJobs];
            }),
          },
        },
      ],
    }).compile();
    jobsService = module.get<JobsService>(JobsService);
    jobsController = module.get<JobsController>(JobsController);
    getAllJobsMock = jest.spyOn(jobsService, 'findAllJobs');
  });
  it('should be defined', () => {
    expect(jobsController).toBeDefined();
  });
  it('should has specific properties', () => {
    const jobs = jobsController.findAll();
    expect(Object.keys(jobs[0])).toEqual(Object.keys(testJobs));
  });
});
