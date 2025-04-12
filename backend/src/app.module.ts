import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { UniversityModule } from './university/university.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { PersonalModule } from './personal/personal.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '10032018',
      database: 'portfolio',
      autoLoadEntities: true,
      synchronize: false, // ⚠️ Только для разработки
    }),
    JobsModule,
    UniversityModule,
    ProjectsModule,
    FeedbacksModule,
    PersonalModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
