import { validateOrReject } from "class-validator";
import { CustonError } from "../../Model/CustomError/CustomError";
import idGenerator, { IdGenerator } from "../../Services/IDGenerator";
import stockBusiness, {
  StockBusiness,
} from "../../stock/business/stockBusiness";
import { ProductsPurchased } from "../../stock/dto/ProductsPurchased";
import purchaseData, { PurchaseDataBase } from "../data/PurchaseDataBase";
import { RegisterPurchaseDto } from "../dto/registerPurchaseDto";
import { Purchase } from "../entity/Purchase";

export class PurchaseBusiness {
  constructor(
    private PurchaseData: PurchaseDataBase,
    private stockBusiness: StockBusiness,
    private idGenerator: IdGenerator
  ) {}

  public async RegisterPurchase(registerPurchaseDto: RegisterPurchaseDto) {
    try {
      await validateOrReject(registerPurchaseDto);
      this.CheckProductsConformity(
        registerPurchaseDto.productsPurchased as any
      );
      await this.checkProductsInDataBase(registerPurchaseDto.productsPurchased);
      const PurchaseId = this.idGenerator.generateId();
      const newPurchase = new Purchase(
        PurchaseId,
        registerPurchaseDto.clientName,
        registerPurchaseDto.totalPrice,
        JSON.stringify(registerPurchaseDto.productsPurchased),
        new Date(registerPurchaseDto.deliveryDate)
      );
      return this.PurchaseData.register(newPurchase);
    } catch (error) {
      if (Array.isArray(error)) {
        this.FormatValidationErrorMessages(error);
      } else {
        throw new CustonError(error.statusCode, error.message);
      }
    }
  }

  private FormatValidationErrorMessages(error: any) {
    const errorMessages = [];
    error.map((error: any) => {
      const message = Object.values(error.constraints);
      errorMessages.push(...message);
    });
    const erroMessagesString = errorMessages.join(" e ");
    throw new CustonError(422, erroMessagesString);
  }

  private CheckProductsConformity(productsPurchased: ProductsPurchased[]) {
    const isArray =
      Array.isArray(productsPurchased) && productsPurchased.length !== 0;
    let isNotProducts = false;
    if (isArray) {
      isNotProducts = productsPurchased.some(
        (product) =>
          typeof product !== "object" ||
          product === undefined ||
          !product.id ||
          typeof product.id !== "string" ||
          typeof product.qty_purchased !== "number" ||
          product.qty_purchased < 1
      );
    }
    if (!isArray || isNotProducts) {
      throw new CustonError(422, "Há um erro na lista de produtos comprados");
    }
  }

  private async checkProductsInDataBase(productsPurchased: any[]) {
    const productsInDatabase = productsPurchased.map((product: any) => {
      return this.stockBusiness.getById(product.id);
    });
    const productsDB = await Promise.all(productsInDatabase);
    productsPurchased.forEach((product, index) => {
      const indexDB = productsDB.findIndex((p) => p.id === product.id);
      if (
        productsDB[indexDB].qty_stock - productsPurchased[index].qty_purchased <
        0
      ) {
        throw new CustonError(
          422,
          `A quantidade comprada do produto de id ${productsPurchased[index].id}` +
            " é maior que do que a quantidade em estoque."
        );
      }
    });
    return productsDB;
  }
}

export default new PurchaseBusiness(purchaseData, stockBusiness, idGenerator);
