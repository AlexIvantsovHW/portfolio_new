import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEnitiy } from './entities/feedback.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbacksRepository {
  constructor(
    @InjectRepository(FeedbackEnitiy)
    private readonly repo: Repository<FeedbackEnitiy>,
  ) {}

  getAllFeedbacks(): Promise<FeedbackEnitiy[]> {
    return this.repo.find();
  }
  createFeedback(createFeedbackDto: CreateFeedbackDto) {
    const feedback = this.repo.create(createFeedbackDto);
    return this.repo.save(feedback);
  }
}
