import { AppDataSource } from "../../data-source/data-source"
import { Order } from "../../order/entity/Order"
import { Stock } from "../entity/Stock"

export const UnpopulateDatabase = async () => {
    const dataBase = AppDataSource
    await dataBase.initialize()
    const stockRepository = dataBase.getRepository(Stock)
    const orderRepository = dataBase.getRepository(Order)
    await stockRepository.clear()
    await orderRepository.clear()
    await dataBase.destroy()
}

UnpopulateDatabase()