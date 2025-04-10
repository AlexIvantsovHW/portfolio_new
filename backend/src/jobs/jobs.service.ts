import { Injectable } from '@nestjs/common';
import { JobsRepository } from './jobs.repository';
import { JobEntity } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(private readonly jobsRepository: JobsRepository) {}

  findAllJobs(): Promise<JobEntity[]> {
    return this.jobsRepository.getAllJobs();
  }
  createJob(createJobDto: CreateJobDto) {
    return this.jobsRepository.createJob(createJobDto);
  }
}
