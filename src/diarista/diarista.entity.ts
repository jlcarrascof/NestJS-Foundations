import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Diarista {
    @PrimaryGeneratedColumn('increment')
    id: number;
    name: string;
    address: string;
    age: number;
}
