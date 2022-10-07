import { Router } from "express";
import StockController from "../stock/controller/stockController";

export const StockRouter = Router()

StockRouter.get('/all', StockController.GetAll)