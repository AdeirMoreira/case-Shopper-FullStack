import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source/data-source";
import purchaseBusiness, { PurchaseBusiness } from "../business/purchaseBusiness";
import { RegisterPurchaseDto } from "../dto/registerPurchaseDto";

export class PurchaseController {
  constructor(
    private purchaseBusiness: PurchaseBusiness,
    private appDataSource: DataSource
  ) {}

  public RegisterPurchase = async (req: Request, res: Response) => {
    const { clientName, totalPrice, productsPurchased, deliveryDate } =
      req.body;
    const registerPurchaseDto = new RegisterPurchaseDto(
      clientName,
      totalPrice,
      productsPurchased,
      deliveryDate
    );
    
    try {
      !this.appDataSource.isInitialized && await this.appDataSource.initialize();
      const response = await this.purchaseBusiness.RegisterPurchase(
        registerPurchaseDto
      );
      res.statusMessage = "Compra registrada com sucesso!";
      res.status(201).send(response);
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    } 
    finally {
      this.appDataSource.isInitialized && await this.appDataSource.destroy();
    }
  };
}
export default new PurchaseController(purchaseBusiness, AppDataSource);
