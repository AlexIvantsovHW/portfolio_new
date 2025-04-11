import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEnitiy } from './entities/feedback.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedbacksRepository {
  constructor(
    @InjectRepository(FeedbackEnitiy)
    private readonly repo: Repository<FeedbackEnitiy>,
  ) {}

  getAllFeedbacks(): Promise<FeedbackEnitiy[]> {
    return this.repo.find();
  }
}
