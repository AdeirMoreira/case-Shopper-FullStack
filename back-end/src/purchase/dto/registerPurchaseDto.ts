import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Min,
} from "class-validator";

export class RegisterPurchaseDto {
  constructor(
    clientName: string,
    totalPrice: number,
    productsPruchased: object[],
    deliveryDate: string
  ) {
    this.clientName = clientName;
    this.totalPrice = totalPrice;
    this.productsPurchased = productsPruchased;
    this.deliveryDate = deliveryDate;
  }

  @IsNotEmpty({ message: "clientName é requerido" })
  @IsString({ message: "clientName deve ser uma string" })
  clientName: string;

  @IsNumber({}, { message: "totalPrice deve ser um numero" })
  @Min(0.01, { message: "totalPrice deve ser um numero positivo" })
  totalPrice: number;

  @IsNotEmpty({ message: "productsPurchased é requerido" })
  @IsObject({
    each: true,
    message: "productsPurchased deve ser um array de produtos",
  })
  productsPurchased: object[];

  @IsDateString({}, { message: "deliveryDate deve ser uma data válida" })
  deliveryDate: string;
}
