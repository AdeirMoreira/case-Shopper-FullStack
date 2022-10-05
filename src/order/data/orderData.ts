import { DataSource } from "typeorm"
import { AppDataSource } from "../../data-source/data-source"
import { Order } from "../entity/Order"

export class OrderDataBase {
    constructor(
        private appDataSource: DataSource
    ){}

     public async register(order:Order){
        try {
            await this.appDataSource.initialize()
            const repository = this.appDataSource.getRepository(Order)
            const response = await repository.save(order)
            return response
        } catch (error) {
            throw new Error(error)
        } finally {
            this.appDataSource.destroy()
        }
    }
}

export default new OrderDataBase(
    AppDataSource
)