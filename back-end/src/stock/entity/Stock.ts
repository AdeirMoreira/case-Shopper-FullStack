import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "Stock" })
export class Stock {
	constructor(id: string, name: string, price: number, qty_stock: number) {
		(this.id = id), (this.name = name), (this.price = price), (this.qty_stock = qty_stock);
	}
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	price: number;

	@Column()
	qty_stock: number;
}
