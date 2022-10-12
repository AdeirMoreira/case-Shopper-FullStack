import { BrowserRouter,  Route,  Routes } from "react-router-dom"
import CheckOutPage from "../pages/checkOutPage/CheckOutPage"
import MainPage from "../pages/main/MainPage"
import ShippingPage from "../pages/shippingPage/ShippingPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/checkout" element={<CheckOutPage/>}/>
                <Route path="/shipping" element={<ShippingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
