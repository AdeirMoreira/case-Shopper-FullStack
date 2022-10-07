import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source/data-source";
import orderBusiness, { OrderBusiness } from "../business/orderBusiness";
import { RegisterOrderDto } from "../dto/registerOrderDto";

export class OrderController {
    constructor(
        private orderBusiness: OrderBusiness,
        private appDataSource: DataSource
    ){}

    public  RegisterOrder = async (req:Request,res:Response) => {
        const {clientName, totalPrice, productsList, deliveryDate} = req.body
        const registerOrderDto = new RegisterOrderDto(clientName, totalPrice, productsList, deliveryDate)
        try {
            await this.appDataSource.initialize()
            const response = await this.orderBusiness.RegisterOrder(registerOrderDto)
            res.statusMessage = 'Compra registrada com sucesso!'
            res.status(201).send(response)
        } catch (error) {
            res.status(error.statusCode || 400).send({message:error.message})
        } 
        finally {
            this.appDataSource.destroy()
        }
    }
}
export default new OrderController(
    orderBusiness,
    AppDataSource
)