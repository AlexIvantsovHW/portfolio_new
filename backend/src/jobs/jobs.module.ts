import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { JobsRepository } from './jobs.repository';
import { JobEntity } from './entities/job.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [JobsController],
  providers: [JobsService, JobsRepository],
  imports: [TypeOrmModule.forFeature([JobEntity])],
  exports: [JobsService],
})
export class JobsModule {}
