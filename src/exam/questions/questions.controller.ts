import { CreateQuestionDto } from './questions.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
    constructor(private questionsService: QuestionsService) {}
    @Post()
    addQuestions(@Body()createQuestionDto:CreateQuestionDto)
    {
        return this.questionsService.addQuestion(createQuestionDto);
    }
    
}
