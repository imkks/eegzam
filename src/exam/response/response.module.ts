import { StudentResponse } from './response.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseController } from './response.controller';
import { ResponseService } from './response.service';
import { PerformanceModule } from 'src/performance/performance.module';

@Module({
  imports:[TypeOrmModule.forFeature([StudentResponse]),PerformanceModule],
  controllers: [ResponseController],
  providers: [ResponseService]
})
export class ResponseModule {}
