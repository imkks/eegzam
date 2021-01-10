import { CreateExamDto } from './exam.dto';
import { ExamService } from './exam.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('exam')
export class ExamController {
    constructor(private examService: ExamService) {}
    @Post()
    addExam(@Body()createExamDto:CreateExamDto)
    {
        return this.examService.addExam(createExamDto);
    }
    @Get()
    getExamsList()
    {
        return this.examService.getExamsList();
    }
    @Get(':id')
    getExam(@Param('id')id:string)
    {
        return this.examService.getExam(id);
    }
}
