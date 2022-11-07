import { IsInt, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID, Min } from "class-validator";

export class ProductsPurchasedDto {
	constructor(
		// id:string,  qty_purchased: number | undefined,
		productsPurchased: object[]
	) {
		// this.id = id
		// this.qty_purchase = qty_purchased
		this.productsPurchased = productsPurchased;
	}

	// @IsNotEmpty({ message: "O id do produto comprado é inválido"})
	// @IsUUID('4',{ message: "O id do produto comprado é invalido"})
	// id: string;

	// @IsInt({ message: "O número de unidades compradas deve ser um inteiro"})
	// @Min(1,{ message:'O Número de unidades compradas dever ser maior que 0'})
	// qty_purchase: number;

	@IsNotEmpty({ message: "productsPurchased é requerido" })
	@IsObject({ each: true, message: "productsPurchased deve ser um array de objetos" })
	productsPurchased: object[];
}
