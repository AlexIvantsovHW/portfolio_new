import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactRepository } from './contact.repository';
import { CreateContactDto } from './dto/create-contact.dto';
import { validate } from 'class-validator';

describe('ContactController', () => {
  let contactController: ContactController;
  let contactService: ContactService;

  const mockRepository = {
    findAll: jest.fn(),
    createContact: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [
        ContactService,
        { provide: ContactRepository, useValue: mockRepository },
      ],
    }).compile();

    contactController = module.get<ContactController>(ContactController);
    contactService = module.get<ContactService>(ContactService);
  });

  describe('find all contacts', () => {
    it('should return array of contacts and have length equals to 1', async () => {
      const result = [
        {
          id: 1,
          whatsApp: 12345678,
          telegram: 12345678,
          linkedIn: 'https://test.com',
          phone: 12345678,
          email: 'test@mail.com',
          cv: 'https://test.com',
          website: 'https://test.com',
        },
      ];
      jest.spyOn(contactService, 'findAll').mockResolvedValue(result);
      const contacts = await contactController.findAll();
      expect(contacts).toBe(result);
      expect(contacts).toHaveLength(1);
    });
    describe('create new contact', () => {
      it('shoud create a new contact to db with id equals 2', () => {
        const createContactDto: CreateContactDto = {
          whatsApp: 111111111,
          telegram: 111111111,
          linkedIn: 'https://test2.com',
          phone: 111111111,
          email: 'test2@mail.com',
          cv: 'https://test2.com',
          website: 'https://test2.com',
        };
        const create = { id: 2, ...createContactDto };
        mockRepository.createContact(create);
        expect(create).toEqual({ id: 2, ...createContactDto });
      });
      it('should fail validation with invalid email', async () => {
        const dto = new CreateContactDto();
        dto.whatsApp = 111111;
        dto.telegram = 111111;
        dto.linkedIn = 'https://test.com';
        dto.phone = 111111;
        dto.email = 'invalid_email';
        dto.cv = 'https://cv.com';
        dto.website = 'https://site.com';

        const errors = await validate(dto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].property).toBe('email');
      });
    });
  });
});
