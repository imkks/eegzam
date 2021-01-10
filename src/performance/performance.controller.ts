import { PerformanceService } from './performance.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreatePerformanceDto } from './performance.dto';

@Controller('performance')
export class PerformanceController {
    constructor(private performanceService: PerformanceService) {}
    @Post()
    addPerformance(@Body()createPerformanceDto:CreatePerformanceDto)
    {
        return this.performanceService.addPerformance(createPerformanceDto);
    }
    @Get()
    getPerformancesList()
    {
        return this.performanceService.getPerformancesList();
    }
}
