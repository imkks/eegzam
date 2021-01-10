import { Performance } from './performance.entity';
import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePerformanceDto, UpdatePerformanceDto } from './performance.dto';

@Injectable()
export class PerformanceService {
    constructor(
        @InjectRepository(Performance)
        private performanceRepository: Repository<Performance>,
      ) {}
      async addPerformance(createPerformanceDto:CreatePerformanceDto) {
          try
          {
                const performance=new Performance();
                for(const [key,value] of Object.entries(createPerformanceDto))
                {
                    performance[key]=value;
                }
                const performancesaved= await this.performanceRepository.save(performance);
                return performancesaved;
          }
          catch(error)
          {
            Logger.error(error);
            throw new InternalServerErrorException('There was an error in adding performance');
          }
          
      }
      async getPerformancesList()
      {
          const performanceslist= await this.performanceRepository.find();
          return performanceslist;
      }
      async getPerformance(id:string)
      {
          const performances= await this.performanceRepository.findByIds([id]);
          return performances;
      }
      async updatePerformance(id:string,partialPerformance:UpdatePerformanceDto)
      {
          try{
              const {affected}=await Performance.update(id,partialPerformance);
              if(affected) return this.performanceRepository.findOne(id);
          }
          catch(e)
          {
              throw new BadRequestException("Performance Report Not Updated");
          }
      }
}
