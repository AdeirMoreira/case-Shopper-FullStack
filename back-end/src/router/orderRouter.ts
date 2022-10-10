import { Router } from "express";
import orderController from "../order/controller/orderController";

export const OrderRouter = Router()

OrderRouter.post('/register', orderController.RegisterOrder)