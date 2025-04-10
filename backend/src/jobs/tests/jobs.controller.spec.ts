import { TestingModule, Test } from '@nestjs/testing';
import { JobsController } from '../jobs.controller';
import { JobsService } from '../jobs.service';
import { testJobs } from './jobs.mock';
import { IJobs } from '../module/jobs.interface';
describe('Jobs controller test', () => {
  let jobService: JobsService;
  let jobController: JobsController;
  let getAllJobsMock: jest.SpyInstance;
  let createJobMock: jest.SpyInstance;

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
            createJob: jest.fn(() => testJobs),
          },
        },
      ],
    }).compile();
    jobService = module.get<JobsService>(JobsService);
    jobController = module.get<JobsController>(JobsController);
    getAllJobsMock = jest.spyOn(jobService, 'findAllJobs');
    createJobMock = jest.spyOn(jobService, 'createJob');
  });

  it('should be defined', () => {
    expect(JobsController).toBeDefined();
  });
  it('should be array', () => {
    const jobs = jobController.findAll();
    expect(Array.isArray(jobs)).toBe(true);
  });
  it('should has specific properties', () => {
    const jobs = jobController.findAll();
    expect(Object.keys(jobs[0])).toEqual(Object.keys(testJobs));
  });
  describe('create a new job', () => {
    it('should create a new job', async () => {
      const {
        id,
        ...testJob
      }: Omit<
        IJobs,
        | 'companyTitle'
        | 'startAt'
        | 'endAt'
        | 'description'
        | 'jobTitle'
        | 'software_id'
      > = testJobs;
      const result = await jobController.create(testJobs);
      expect(result).toEqual(testJobs);
    });
  });
});
