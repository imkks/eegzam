
import { Question } from './../questions/questions.entity';

import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Performance } from 'src/performance/performance.entity';

@Entity()
@Index(['question','performance'],{unique:true})
export class StudentResponse extends BaseEntity
{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    choice:string;
    @OneToOne(()=>Question,{eager:true})
    @JoinColumn()
    question:Question;
    @ManyToOne(()=>Performance,{onDelete:'CASCADE'})
    performance:Performance;

}