import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { ExamModule } from './exam/exam.module';
import { PerformanceModule } from './performance/performance.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ExamModule, PerformanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
