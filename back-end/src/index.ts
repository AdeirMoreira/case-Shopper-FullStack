import "reflect-metadata";
import { app } from "./app";
import { PurchaseRouter } from "./router/purchaseRouter";
import { StockRouter } from "./router/stokRouter";

app.use("/purchase", PurchaseRouter);

app.use("/stock", StockRouter);

export default app;
