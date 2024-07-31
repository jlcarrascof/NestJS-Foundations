import { Entity } from "typeorm";

@Entity()
export class Diarista {
    id: number;
    name: string;
    address: string;
    age: number;
}
