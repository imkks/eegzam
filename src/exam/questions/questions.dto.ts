import { IsString } from "class-validator";

export class CreateQuestionDto
{
    @IsString()
    description:string;
    @IsString()
    optionA:string;
    @IsString()
    optionB:string;
    @IsString()
    optionC:string;
    @IsString()
    optionD:string;
    @IsString()
    correctAns:string;
    @IsString()
    exam:string;
}