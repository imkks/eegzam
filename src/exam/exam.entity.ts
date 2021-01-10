import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./questions/questions.entity";

@Entity()
export class Exam extends BaseEntity
{  
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name:string;

    @OneToMany(()=>Question, Question=>Question.exam,{eager:true})
    questions:Question[];

    
}