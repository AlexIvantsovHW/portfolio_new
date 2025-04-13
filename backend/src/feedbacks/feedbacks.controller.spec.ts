import { Test, TestingModule } from '@nestjs/testing';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksRepository } from './feedbacks.repository';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

describe('FeedbacksController', () => {
  let feedbacksController: FeedbacksController;
  let feedbacksService: FeedbacksService;

  const mockRepository = {
    findAll: jest.fn(),
    createFeedback: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedbacksController],
      providers: [
        FeedbacksService,
        {
          provide: FeedbacksRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    feedbacksController = module.get<FeedbacksController>(FeedbacksController);
    feedbacksService = module.get<FeedbacksService>(FeedbacksService);
  });

  describe('findAll', () => {
    it('should return an array of feedbacks', async () => {
      const result = [
        {
          id: 1,
          name: 'test name',
          date: new Date('2025-01-01'),
          description: 'test description',
          position: 'test position',
          companyTitle: 'test company Title',
          logo: 'test logo',
        },
      ];

      jest.spyOn(feedbacksService, 'findAll').mockResolvedValue(result);
      const data = await feedbacksController.findAll();
      expect(data).toBe(result);
    });
    it('should create a new feedback', () => {
      const createFeedbackDto: CreateFeedbackDto = {
        name: 'test name',
        date: new Date('2024-12-31'),
        description: 'test description',
        position: 'test position',
        companyTitle: 'test company title',
        logo: 'https://test.com',
      };
      const create = { id: 2, ...createFeedbackDto };
      mockRepository.createFeedback.mockResolvedValue(create);
      expect(create).toEqual({ id: 2, ...createFeedbackDto });
    });
  });
});
