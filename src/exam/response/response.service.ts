import { response } from 'express';
import { PerformanceService } from './../../performance/performance.service';
import { StudentResponse } from './response.entity';
import { CreateStudentResponseDto } from './response.dto';
import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ResponseService {
    constructor(
        @InjectRepository(StudentResponse)
        private responseRepository: Repository<StudentResponse>,
        private performanceService:PerformanceService
      ) {}
      async addResponse(createResponseDto:CreateStudentResponseDto) {
        const studentResponse=new StudentResponse();
          try
          {
                
                for(const [key,value] of Object.entries(createResponseDto))
                {
                    studentResponse[key]=value;
                }
                const responsesaved= await this.responseRepository.save(studentResponse);
                return responsesaved;
          }
          catch(er)
          {
              if(er.code=="23505")
              {
                  const ourresponse=await this.responseRepository.
                  findOne({where:{performance:studentResponse.performance,
                    question:studentResponse.question

                }})
                ourresponse.choice=studentResponse.choice;
                await ourresponse.save();
                return ourresponse;

                    //const responsesaved=await this.responseRepository.update(,studentResponse)
                    // return responsesaved
              }
            Logger.error(er);
            throw new InternalServerErrorException('There was an error in recording your response');
          }
          
      }
      async getResponses(id:string)
      {
          const responses= await this.responseRepository.find({where:{performance:id}});
          return responses;
      }
      async evaluate(id:string) {
         const responses=await this.getResponses(id);
         let corrects=0;
         for(let i=0;i<responses.length;i++)
         {
            if(responses[i].choice==responses[i].question.correctAns)
                corrects+=1;

         }
         const wrongs=responses.length-corrects;
         const partialPerformance={"corrects":corrects.toString(),"wrongs":wrongs.toString()};
         return this.performanceService.updatePerformance(id,partialPerformance);


         
          
      }

      async deleteResponse(id:string)
      {
          const result=await this.responseRepository.delete(id)
          if(result.affected==0)
            throw new NotFoundException('The response doesnt exist');

      }
      async updateResponse(id:string,choice:string)
      {
          const studentResponse:StudentResponse=new StudentResponse();
          studentResponse.choice=choice;
          try{
              const result=await this.responseRepository.update(id,studentResponse);
              if(result.affected==0)
                throw new NotFoundException('The response wasnt updated');
            
          }
          catch(e)
          {
            console.log(e);
          }
          //const studentResponse=await this.responseRepository.find({where:{id}});
          
          
      }
}
