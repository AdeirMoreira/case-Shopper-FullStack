import { validateOrReject } from "class-validator";
import { CustonError } from "../../Model/CustomError/CustomError";
import { Product } from "../../Model/types";
import idGenerator, { IdGenerator } from "../../Services/IDGenerator";
import stockBusiness, { StockBusiness } from "../../stock/business/stockBusiness";
import { UpdateProductDto } from "../../stock/dto/updateProductDto";
import { Stock } from "../../stock/entity/Stock";
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
            this.CheckProductsConformity(registerOrderDto.productsList as any)
            const products = await this.checkProductsInDataBase(registerOrderDto.productsList)

            await this.UpdateStock(products,registerOrderDto.productsList as any)

            const orderId = this.idGenerator.generateId()
            const newOrder = new Order(
                orderId,
                registerOrderDto.clientName,
                registerOrderDto.totalPrice,
                JSON.stringify(registerOrderDto.productsList),
                new Date(registerOrderDto.deliveryDate)
                )
            const respone = await this.orderData.register(newOrder)
            return respone
            return null
        } catch (error) {
            if(Array.isArray(error)){
                this.FormatValidationErrorMessages(error)
            } else {
                throw new CustonError(error.statusCode,error.message)
            }            
        }
    }

    private async UpdateStock(stock:Stock[],productsPurchaseList:Product[]){
        const productsUpdatedArray = []
        for (let index in stock) {
            const newProductQty = stock[index].qty_stock - productsPurchaseList[index].qty_purchased
            const productUpdated = new UpdateProductDto(
                productsPurchaseList[index].id, 
                undefined, undefined,
                newProductQty
            )
            productsUpdatedArray.push(productUpdated)
        }
        const promisesArray = productsUpdatedArray.map(product => {
            return this.stockBusiness.update(product)
        })
        return Promise.all(promisesArray)
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

    private CheckProductsConformity (productsList:Product[]) {
        const isArray = Array.isArray(productsList)
        let isNotProducts = false
        if(isArray){
            isNotProducts = productsList.some(product => 
                (typeof product !== 'object' || product === undefined) ||
                (!product.id || typeof product.id  !==  'string' || 
                typeof product.qty_purchased !== 'number' || product.qty_purchased < 1)
            )
        }
        if(!isArray || isNotProducts) {
            throw new CustonError(422,"Há um erro na lista de produtos comprados");
        }
    }

    private async checkProductsInDataBase (productsList:any[]) {
        const productsInDatabase =  productsList.map((product:any) => {
            return this.stockBusiness.getById(product.id)
        })
        const products = await Promise.all(productsInDatabase)
        const anyProductMissig = products.some(product => !product)
        if(anyProductMissig){
            throw new CustonError(422,'Um dos produtos não foi encontrado!')
        }
        return products
    }
}

export default new OrderBusiness(
    orderData,
    stockBusiness,
    idGenerator,
)