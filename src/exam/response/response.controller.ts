import { CreateStudentResponseDto, UpdateStudentResponseDto } from './response.dto';
import { ResponseService } from './response.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('response')
export class ResponseController {
    constructor(private responseService: ResponseService) {}
    @Post()
    addResponse(@Body()createResponseDto:CreateStudentResponseDto)
    {
        return this.responseService.addResponse(createResponseDto);
    }
    @Post('submit/:id')
    evaluate(@Param('id')id:string,)
    {
        return this.responseService.evaluate(id);
    }
    @Get(':id')
    getResponses(@Param('id')id:string)
    {
        return this.responseService.getResponses(id);
    }
    @Delete(':id')
    deleteResponse(@Param('id')id:string)
    {
        return this.responseService.deleteResponse(id);
    }
    @Patch('id')
    updateResponse(@Param('id')id:string, @Body('choice') choice:string)
    {
        return this.responseService.updateResponse(id,choice);
    }
}
