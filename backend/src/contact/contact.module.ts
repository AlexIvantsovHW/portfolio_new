import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactRepository } from './contact.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactRepository],
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  exports: [ContactService],
})
export class ContactModule {}
