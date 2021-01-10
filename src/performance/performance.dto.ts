import { IsString } from "class-validator";

export class CreatePerformanceDto
{
    @IsString()
    exam:string;
    
}
export class UpdatePerformanceDto
{
    @IsString()
    corrects:string;
    @IsString()
    wrongs:string;
}