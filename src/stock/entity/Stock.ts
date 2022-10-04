import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Stock {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    qty_stock: number;
}