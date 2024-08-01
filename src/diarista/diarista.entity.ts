import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Diarista {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    address: string;

    @Column({ nullable: false })
    age: number;
}
