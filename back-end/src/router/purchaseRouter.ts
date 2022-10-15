import { Router } from "express";
import  purchaseController  from "../purchase/controller/purchaseController";


export const PurchaseRouter = Router();

PurchaseRouter.post("/register", purchaseController.RegisterPurchase);
