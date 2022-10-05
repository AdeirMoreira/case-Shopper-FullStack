import { validateOrReject } from "class-validator";
import { CustonError } from "../../Model/CustomError/CustomError";
import idGenerator, { IdGenerator } from "../../Services/IDGenerator";
import orderData, { OrderDataBase } from "../data/orderData";
import { RegisterOrderDto } from "../dto/registerOrderDto";
import { Order } from "../entity/Order";

export class OrderBusiness {
    constructor(
        private orderData: OrderDataBase,
        private idGenerator: IdGenerator
    ){}
    
     public async RegisterOrder(registerOrderDto:RegisterOrderDto){
        try {
            await validateOrReject(registerOrderDto)
            const orderId = this.idGenerator.generateId()
            const newOrder = new Order(
                orderId,
                registerOrderDto.clientId,
                registerOrderDto.clientName,
                registerOrderDto.totalPrice,
                registerOrderDto.productsList)
            return this.orderData.register(newOrder)
        } catch (error) {
            if(Array.isArray(error)){
                this.FormatValidationErrorMessages(error)
            } else {
                throw new error(error)
            }            
        }
    }

    private FormatValidationErrorMessages(error:any){
        const errorMessages = []
        error.map((error:any) => {
            const message = Object.values(error.constraints)
            errorMessages.push(...message)
                
        })
        const erroMessagesString = errorMessages.join(', ')
        throw new CustonError(422,erroMessagesString)
    }
}

export default new OrderBusiness(
    orderData,
    idGenerator
)