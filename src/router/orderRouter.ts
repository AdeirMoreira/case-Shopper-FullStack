import { Router } from "express";
import OrderController from "../order/controller/orderController";

export const OrderRouter = Router()

OrderRouter.post('/register', OrderController.RegisterOrder)