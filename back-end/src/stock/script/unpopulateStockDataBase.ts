import { AppDataSource } from "../../data-source/data-source";
import { Purchase } from "../../purchase/entity/Purchase";
import { Stock } from "../entity/Stock";

export const UnpopulateDatabase = async () => {
	const dataBase = AppDataSource;
	await dataBase.initialize();
	const stockRepository = dataBase.getRepository(Stock);
	const PurchaseRepository = dataBase.getRepository(Purchase);
	await stockRepository.clear();
	await PurchaseRepository.clear();
	await dataBase.destroy();
};

UnpopulateDatabase();
