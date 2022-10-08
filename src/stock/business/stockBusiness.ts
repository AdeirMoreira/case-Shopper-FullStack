import { validateOrReject } from "class-validator";
import { CustonError } from "../../Model/CustomError/CustomError";
import stockDataBase, { StockDataBase } from "../data/stockDataBase";
import { ProductsPurchased } from "../dto/ProductsPurchased";
import { ProductsPurchasedDto } from "../dto/ProductsPurchasedDto";
import { Stock } from "../entity/Stock";

export class StockBusiness {
  constructor(private stockDataBase: StockDataBase) {}

  public getAll = async () => {
    try {
      return this.stockDataBase.getAll();
    } catch (error) {
      throw new CustonError(error.statusCode, error.message);
    }
  };

  public getById = async (id: string) => {
    try {
      const product = await this.stockDataBase.getById(id);
      if (!product) {
        throw new CustonError(404, "Produto não encontrado!");
      }
      return product;
    } catch (error) {
      throw new CustonError(error.statusCode, error.message);
    }
  };

  public update = async (productsPurchasedDto: ProductsPurchasedDto) => {
    try {
      await validateOrReject(productsPurchasedDto);
      await this.CheckProductsPurchasedConformity(
        productsPurchasedDto.productsPurchased as any
      );
      const productsPurchasedDB = await this.checkProductsInDataBase(
        productsPurchasedDto.productsPurchased as any
      );

      const productsDto: ProductsPurchased =
        productsPurchasedDto.productsPurchased as any;
      const productsUpdatedArray = [];
      for (let index in productsPurchasedDB) {
        const newProductQty =
          productsPurchasedDB[index].qty_stock -
          productsDto[index].qty_purchased;
        const productUpdated = new Stock(
          productsPurchasedDB[index].id,
          productsPurchasedDB[index].name,
          productsPurchasedDB[index].price,
          newProductQty
        );
        productsUpdatedArray.push(productUpdated);
      }
      const promisesArray = productsUpdatedArray.map((product) => {
        return this.stockDataBase.update(product);
      });
      return Promise.all(promisesArray);
    } catch (error) {
      if (Array.isArray(error)) {
        this.FormatValidationErrorMessages(error);
      } else {
        throw new CustonError(error.statusCode, error.message);
      }
    }
  };

  private async CheckProductsPurchasedConformity(
    productsPurchased: ProductsPurchased[]
  ) {
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

  private async checkProductsInDataBase(
    productsPurchased: ProductsPurchased[]
  ) {
    const productsInDatabase = productsPurchased.map((product: any) => {
      return this.getById(product.id);
    });
    return Promise.all(productsInDatabase);
  }

  private FormatValidationErrorMessages(error: any) {
    const errorMessages = [];
    error.map((error: any) => {
      const message = Object.values(error.constraints);
      errorMessages.push(...message);
    });
    const erroMessagesString = errorMessages.join(", ");
    throw new CustonError(422, erroMessagesString);
  }
}

export default new StockBusiness(stockDataBase);
