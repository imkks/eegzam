import { CreateExamDto } from './exam.dto';
import { Exam } from './exam.entity';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExamService {
    constructor(
        @InjectRepository(Exam)
        private examRepository: Repository<Exam>,
      ) {}
      async addExam(createExamDto:CreateExamDto) {
          try
          {
                const exam=new Exam();
                for(const [key,value] of Object.entries(createExamDto))
                {
                    exam[key]=value;
                }
                const examsaved= await this.examRepository.save(exam);
                return examsaved;
          }
          catch(error)
          {
            Logger.error(error);
            throw new InternalServerErrorException('There was an error in adding exam');
          }
          
      }
      async getExamsList()
      {
          const examslist= await this.examRepository.find();
          return examslist;
      }
      async getExam(id:string)
      {
          const exams= await this.examRepository.findByIds([id]);
          return exams;
      }
}
