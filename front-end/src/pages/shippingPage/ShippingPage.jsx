import Header from "../../components/header/Header"
import * as s from './Style'
import shopperTruck from '../../assets/images/shopperTruck.png'
import { useNavigate } from "react-router-dom"
import { goToMainPage } from "../../routes/Coordinators"

const ShippingPage = () => {
    const navigate = useNavigate()
    return(
        <>
            <Header/>
            <s.ShippingCotainer>
                <s.ShopperTruckImg src={shopperTruck}/>
                <s.OrderDispatched>
                    Seu pedido está sendo processado e em breve chegará em seu endereço.
                </s.OrderDispatched>
                <s.ReturnToPurchasesButton onClick={() => goToMainPage(navigate)}>Voltar às compras</s.ReturnToPurchasesButton>
            </s.ShippingCotainer>
        </>
    )
}

export default ShippingPage