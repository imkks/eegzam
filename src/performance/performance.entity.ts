import { Exam } from './../exam/exam.entity';
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Performance extends BaseEntity
{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column({nullable:true})
    corrects:string;
    @Column({nullable:true})
    notAttempted:string;
    @Column({nullable:true})
    wrongs:string;
    @OneToOne(()=>Exam)
    exam:Exam;

}