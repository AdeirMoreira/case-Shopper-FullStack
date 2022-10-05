import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name:'Order' })
export class Order {
    constructor(
         id :string, clientId:number, clientName: string, totalPrice: number, productsList: string
    ){
        this.id = id
        this.clientId = clientId,
        this.clientName = clientName,
        this.totalPrice = totalPrice,
        this.productsList = productsList
    }
    
    @PrimaryColumn()
    id: string

    @Column()
    clientId: number

    @Column('varchar')
    clientName: string

    @Column('float')
    totalPrice: number

    @Column('text')
    productsList: string
}