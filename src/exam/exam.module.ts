import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamController } from './exam.controller';
import { Exam } from './exam.entity';
import { ExamService } from './exam.service';
import { QuestionsModule } from './questions/questions.module';
import { ResponseModule } from './response/response.module';

@Module({
  controllers: [ExamController],
  providers: [ExamService],
  imports: [QuestionsModule, ResponseModule,TypeOrmModule.forFeature([Exam])]
})
export class ExamModule {}
