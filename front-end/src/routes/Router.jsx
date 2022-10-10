import { BrowserRouter,  Route,  Routes } from "react-router-dom"
import CartPage from "../pages/cart/CartPage"
import MainPage from "../pages/main/MainPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
