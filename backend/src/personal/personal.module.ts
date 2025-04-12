import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalEntity } from './entities/personal.entity';
import { PersonalRepository } from './personal.repository';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService, PersonalRepository],
  imports: [TypeOrmModule.forFeature([PersonalEntity])],
  exports: [PersonalService],
})
export class PersonalModule {}
