import { IsString } from "class-validator";

export class CreateStudentResponseDto
{
    @IsString()
    choice:string;
    @IsString()
    question:string;
    @IsString()
    performance:string;
}
export class UpdateStudentResponseDto
{
    @IsString()
    choice:string;
}