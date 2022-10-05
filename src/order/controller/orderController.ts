import { Request, Response } from "express";
import orderBusiness, { OrderBusiness } from "../business/orderBusiness";
import { RegisterOrderDto } from "../dto/registerOrderDto";

export class OrderController {
    constructor(
        private orderBusiness:OrderBusiness
    ){}

    public async RegisterOrder(req:Request,res:Response){
        const {clientId, clientName, totalPrice, productsList} = req.body
        const registerOrderDto = new RegisterOrderDto(clientId,clientName,totalPrice,productsList)
        try {
            const response = await orderBusiness.RegisterOrder(registerOrderDto)
            res.statusMessage = 'Compra registrada com sucesso!'
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            res.status(error.statusCode || 400).send({message:error.message})
        }
    }
}
export default new OrderController(
    orderBusiness
)