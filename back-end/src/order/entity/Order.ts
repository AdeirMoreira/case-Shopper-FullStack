import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name:'Order' })
export class Order {
    constructor(
        id :string, clientName: string, totalPrice: number, productsList: string, deliveryDate: Date
    ){
        this.id = id
        this.clientName = clientName,
        this.totalPrice = totalPrice,
        this.productsList = productsList
        this.deliveryDate = deliveryDate
    }
    
    @PrimaryColumn()
    id: string

    @Column('varchar')
    clientName: string

    @Column('float')
    totalPrice: number

    @Column('text')
    productsList: string

    @Column('date')
    deliveryDate: Date
}