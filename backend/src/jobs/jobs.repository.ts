import { Injectable } from '@nestjs/common';
import { JobEntity } from './entities/job.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsRepository {
  constructor(
    @InjectRepository(JobEntity) private readonly rep: Repository<JobEntity>,
  ) {}
  getAllJobs(): Promise<JobEntity[]> {
    return this.rep.find();
  }
  createJob(createJobDto: CreateJobDto) {
    const newJob = this.rep.save(createJobDto);
    return newJob;
  }
}
