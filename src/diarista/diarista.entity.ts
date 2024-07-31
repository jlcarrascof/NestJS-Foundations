import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Diarista {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    age: number;
}
