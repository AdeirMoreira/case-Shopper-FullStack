import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateProductDto {
    constructor(
        id:string, name: string | undefined, price: number | undefined, qty_stock: number | undefined
    ){
        this.id = id
        this.name = name,
        this.price = price,
        this.qty_stock = qty_stock
        
    }

    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsInt()
    @IsOptional()
    price?: number;

    @IsInt()
    @IsOptional()
    qty_stock?: number;
}