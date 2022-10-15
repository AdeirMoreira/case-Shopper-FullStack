import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "Purchase" })
export class Purchase {
  constructor(
    id: string,
    clientName: string,
    totalPrice: number,
    productsPurchased: string,
    deliveryDate: Date
  ) {
    this.id = id,
    this.clientName = clientName,
    this.totalPrice = totalPrice,
    this.productsPurchased = productsPurchased,
    this.deliveryDate = deliveryDate
  }

  @PrimaryColumn()
  id: string;

  @Column("varchar")
  clientName: string;

  @Column("float")
  totalPrice: number;

  @Column("text")
  productsPurchased: string;

  @Column("date")
  deliveryDate: Date;
}
