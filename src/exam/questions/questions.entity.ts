import { Exam } from './../exam.entity';
/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question extends BaseEntity
{  
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    description:string;
    @Column()
    optionA:string;
    @Column()
    optionB:string;
    @Column()
    optionC:string;
    @Column()
    optionD:string;
    @Column()
    correctAns:string;
    @ManyToOne(()=>Exam, Exam=>Exam.questions)
    exam:Exam
    
}