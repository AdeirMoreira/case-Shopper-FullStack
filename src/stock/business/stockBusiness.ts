import { validateOrReject } from "class-validator";
import { CustonError } from "../../Model/CustomError/CustomError";
import stockDataBase, { StockDataBase } from "../data/stockDataBase";
import { UpdateProductDto } from "../dto/updateProductDto";

export class StockBusiness {
    constructor(
        private stockDataBase: StockDataBase
    ){}

    public getAll = async () => {
        try {
            return this.stockDataBase.getAll()
        } catch (error) {
            throw new CustonError(error.statusCode,error.message)
        }
    }

    public getById = async (id:string) => {
        try {
            const product = await this.stockDataBase.getById(id)
            if(!product){
                throw new CustonError(404,'Produto não encontrado!')
            }
            return product
        } catch (error) {
            throw new CustonError(error.statusCode,error.message)
        }
    }

    public update = async (updateProductDto:UpdateProductDto) => {
        try {
            await validateOrReject(updateProductDto)
            await this.getById(updateProductDto.id)
            return this.stockDataBase.update(updateProductDto)
        } catch (error) {
            throw new CustonError(error.statusCode,error.message)
        }
    }
}

export default new StockBusiness(
    stockDataBase
)