import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source/data-source";
import stockBusiness, { StockBusiness } from "../business/stockBusiness";
import { ProductsPurchasedDto } from "../dto/ProductsPurchasedDto";

export class StockController {
	constructor(private stockBusiness: StockBusiness, private appDataSource: DataSource) {}

	public GetAll = async (req: Request, res: Response) => {
		try {
			!this.appDataSource.isInitialized && (await this.appDataSource.initialize());
			const response = await this.stockBusiness.getAll();
			res.status(200).send(response);
		} catch (error) {
			res.status(error.statusCode || 400).send({ message: error.message });
		} finally {
			this.appDataSource.isInitialized && (await this.appDataSource.destroy());
		}
	};

	public Update = async (req: Request, res: Response) => {
		const productsPurchasedDto = new ProductsPurchasedDto(req.body.productsPurchased);
		try {
			!this.appDataSource.isInitialized && (await this.appDataSource.initialize());
			const response = await this.stockBusiness.update(productsPurchasedDto);
			res.status(200).send(response);
		} catch (error) {
			res.status(error.statusCode || 400).send({ message: error.message });
		} finally {
			this.appDataSource.isInitialized && (await this.appDataSource.destroy());
		}
	};
}

export default new StockController(stockBusiness, AppDataSource);
