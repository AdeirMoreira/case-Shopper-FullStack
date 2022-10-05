import "reflect-metadata"
import { app } from "./app"
import { OrderRouter } from "./router/orderRouter"

app.use('/order', OrderRouter)