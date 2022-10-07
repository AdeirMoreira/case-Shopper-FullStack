import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source/data-source";
import { CustonError } from "../../Model/CustomError/CustomError";
import { UpdateProductDto } from "../dto/updateProductDto";
import { Stock } from "../entity/Stock";

export class StockDataBase{
    constructor(
        private appDataSource: DataSource
    ){}

    public async getAll(){
        try {
            const stockRepository = this.appDataSource.getRepository(Stock)
            const products = await stockRepository.find()
            return products
        } catch (error) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    public async getById(id:string){
        try {
            const stockRepository = this.appDataSource.getRepository(Stock)
            const product = await stockRepository.findOneBy({id})
            return product
        } catch (error) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        } 
    }

    public async update(updatedProductDto:UpdateProductDto){
        try {
            const stockRepository = this.appDataSource.getRepository(Stock)
            const result = await stockRepository.save(updatedProductDto)
            return result
        } catch (error) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        } 
    }
}

export default new StockDataBase(
    AppDataSource
)