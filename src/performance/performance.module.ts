import { Performance } from './performance.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceController } from './performance.controller';
import { PerformanceService } from './performance.service';

@Module({
  imports:[TypeOrmModule.forFeature([Performance])],
  controllers: [PerformanceController],
  providers: [PerformanceService],
  exports:[PerformanceService]
})
export class PerformanceModule {}
