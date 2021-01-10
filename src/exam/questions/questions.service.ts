import { CreateQuestionDto } from './questions.dto';
import { Question } from './questions.entity';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
      ) {}
      async addQuestion(createQuestionDto:CreateQuestionDto) {
          try
          {
                const question=new Question();
                for(const [key,value] of Object.entries(createQuestionDto))
                {
                    question[key]=value;
                }
                const questionsaved= await this.questionRepository.save(question);
                return questionsaved;
          }
          catch(error)
          {
            Logger.error(error);
            throw new InternalServerErrorException('There was an error in adding question');
          }
          
      }
}
