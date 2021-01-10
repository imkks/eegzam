import { Question } from './questions.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  imports:[TypeOrmModule.forFeature([Question])],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
