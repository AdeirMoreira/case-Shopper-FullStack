import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class RegisterOrderDto{
    constructor(clientId:number, clientName:string, totalPrice: number, productsList: string){
        this.clientId = clientId
        this.clientName = clientName
        this.totalPrice = totalPrice
        this.productsList = productsList 
    }

    @IsInt({message:"clientId deve ser um numero!"})
    clientId:number

    @IsNotEmpty({message:"clientName é requerido!"})
    @IsString({message:"clientName deve ser uma string!"})
    clientName:string

    @IsNumber({},{message:'total Price deve ser um numero!'})
    @Min(0.01,{message:"total Price deve ser um numero positivo!"})
    totalPrice:number

    @IsNotEmpty({message:'productsList é requerido!'})
    @IsString({message:'productsList deve ser uma string'})
    productsList: string
}