import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // this is a database entitiy
export class Advisor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    advisorName: string;
    
    @Column()
    department: string;
}
