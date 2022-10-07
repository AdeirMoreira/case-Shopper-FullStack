import { DataSource } from "typeorm"
import { AppDataSource } from "../../data-source/data-source"
import { CustonError } from "../../Model/CustomError/CustomError"
import { Order } from "../entity/Order"

export class OrderDataBase {
    constructor(
        private appDataSource: DataSource
    ){}

    public async register(order:Order){
        try {
            const repository = this.appDataSource.getRepository(Order)
            const response = await repository.save(order)
            return response
        } catch (error) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }
}

export default new OrderDataBase(
    AppDataSource
)