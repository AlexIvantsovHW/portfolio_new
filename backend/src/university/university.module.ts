import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { UniversityEntity } from './entities/university.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityRepository } from './university.repository';
@Module({
  controllers: [UniversityController],
  providers: [UniversityService, UniversityRepository],
  imports: [TypeOrmModule.forFeature([UniversityEntity])],
  /*  imports: [
    ConfigModule.forRoot({
      envFilePath: `./.env`,
    }),
    TypeOrmModule.forFeature([UniversityEntity]),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: process.env.RABBITMQ_AUTH_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ], */
  exports: [UniversityService],
})
export class UniversityModule {}
