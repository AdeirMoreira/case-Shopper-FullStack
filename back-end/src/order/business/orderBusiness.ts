import { validateOrReject } from "class-validator";
import { CustonError } from "../../Model/CustomError/CustomError";
import { Product } from "../../Model/types";
import idGenerator, { IdGenerator } from "../../Services/IDGenerator";
import stockBusiness, { StockBusiness } from "../../stock/business/stockBusiness";
import { ProductsPurchased } from "../../stock/dto/ProductsPurchased";
import orderData, { OrderDataBase } from "../data/orderDataBase";
import { RegisterOrderDto } from "../dto/registerOrderDto";
import { Order } from "../entity/Order";

export class OrderBusiness {
    constructor(
        private orderData: OrderDataBase,
        private stockBusiness: StockBusiness,
        private idGenerator: IdGenerator,
    ){}
    
    public async RegisterOrder(registerOrderDto:RegisterOrderDto){
        try {
            await validateOrReject(registerOrderDto)
            this.CheckProductsConformity(registerOrderDto.productsPurchased as any)
            await this.checkProductsInDataBase(registerOrderDto.productsPurchased)
            const orderId = this.idGenerator.generateId()
            const newOrder = new Order(
                orderId,
                registerOrderDto.clientName,
                registerOrderDto.totalPrice,
                JSON.stringify(registerOrderDto.productsPurchased),
                new Date(registerOrderDto.deliveryDate)
                )
            return this.orderData.register(newOrder)
        } catch (error) {
            if(Array.isArray(error)){
                this.FormatValidationErrorMessages(error)
            } else {
                throw new CustonError(error.statusCode,error.message)
            }            
        }
    }

    private FormatValidationErrorMessages(error:any){
        const errorMessages = []
        error.map((error:any) => {
            const message = Object.values(error.constraints)
            errorMessages.push(...message)
                
        })
        const erroMessagesString = errorMessages.join(' e ')
        throw new CustonError(422,erroMessagesString)
    }

    private CheckProductsConformity (productsPurchased:ProductsPurchased[]) {
        const isArray = Array.isArray(productsPurchased) && productsPurchased.length !== 0
        let isNotProducts = false
        if(isArray){
            isNotProducts = productsPurchased.some(product => 
                (typeof product !== 'object' || product === undefined) ||
                (!product.id || typeof product.id  !==  'string' || 
                typeof product.qty_purchased !== 'number' || product.qty_purchased < 1)
            )
        }
        if(!isArray || isNotProducts) {
            throw new CustonError(422,"Há um erro na lista de produtos comprados");
        }
    }

    private async checkProductsInDataBase (productsPurchased:any[]) {
        const productsInDatabase =  productsPurchased.map((product:any) => {
            return this.stockBusiness.getById(product.id)
        })
        const productsDB = await Promise.all(productsInDatabase)
        productsPurchased.forEach((product,index) => {
            const indexDB = productsDB.findIndex(p => p.id === product.id)
            if(productsDB[indexDB].qty_stock - productsPurchased[index].qty_purchased < 0){
                throw new CustonError(422,
                    `A quantidade comprada do produto de id ${productsPurchased[index].id}` +
                    ' é maior que do que a quantidade em estoque.')
            }
        })
        return productsDB
    }
}

export default new OrderBusiness(
    orderData,
    stockBusiness,
    idGenerator,
)