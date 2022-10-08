import { IsNotEmpty, IsUUID, IsInt, Min } from "class-validator";

export class ProductsPurchased {
    constructor(
        id:string,  qty_purchased: number,
    ){
        this.id = id
        this.qty_purchased = qty_purchased
        
    }

    @IsNotEmpty({ message: "O id do produto comprado é inválido"})
    @IsUUID('4',{ message: "O id do produto comprado é invalido"})
    id: string;

    @IsInt({ message: "O número de unidades compradas deve ser um inteiro"})
    @Min(1,{ message:'O Número de unidades compradas dever ser maior que 0'})
    qty_purchased: number;
}