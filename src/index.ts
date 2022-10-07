import "reflect-metadata"
import { app } from "./app"
import { OrderRouter } from "./router/orderRouter"
import { StockRouter } from "./router/stokRouter"

app.use('/order', OrderRouter)

app.use('/stock', StockRouter)