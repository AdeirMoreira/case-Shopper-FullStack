import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source/data-source";
import { CustonError } from "../../Model/CustomError/CustomError";
import { Purchase } from "../entity/Purchase";

export class PurchaseDataBase {
  constructor(private appDataSource: DataSource) {}

  public async register(purchase: Purchase) {
    try {
      const repository = this.appDataSource.getRepository(Purchase);
      const response = await repository.save(purchase);
      return response;
    } catch (error) {
      throw new CustonError(
        error.statusCode || 500,
        error.sqlMessage || error.message
      );
    }
  }
}

export default new PurchaseDataBase(AppDataSource);
