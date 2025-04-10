import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobEntity } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): Promise<JobEntity[]> {
    return this.jobsService.findAllJobs();
  }

  @Post()
  create(@Body(new ValidationPipe()) createJobDto: CreateJobDto) {
    return this.jobsService.createJob(createJobDto);
  }
}
