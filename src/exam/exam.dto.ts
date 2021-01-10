import { IsString } from "class-validator";

export class CreateExamDto
{
    @IsString()
    name:string;
}