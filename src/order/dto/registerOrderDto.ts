import { IsDateString, IsNotEmpty, IsNumber, IsObject, IsString, Min } from "class-validator"


export class RegisterOrderDto{
    constructor(clientName:string, totalPrice: number, productsList: object[], deliveryDate: string){
        this.clientName = clientName
        this.totalPrice = totalPrice
        this.productsList = productsList 
        this.deliveryDate = deliveryDate
    }

    @IsNotEmpty({message:"clientName é requerido!"})
    @IsString({message:"clientName deve ser uma string!"})
    clientName:string

    @IsNumber({},{message:'total Price deve ser um numero!'})
    @Min(0.01,{message:"total Price deve ser um numero positivo!"})
    totalPrice:number

    @IsNotEmpty({message:'productsList é requerido!'})
    @IsObject({each:true ,message:'productsList deve ser um array de produtos'})
    productsList: object[]

    @IsDateString({},{ message:'deliveryDate deve ser uma data válida' })
    deliveryDate: string
}

