import * as s from './Style'
import shoppingBagIcon  from '../../assets/images/shopping-bag.png'
import upArrow from '../../assets/images/up-arrow.png'
import downArrow from '../../assets/images/down-arrow.png'

export const Cart = () => {
    return (
        <s.CartContainer>
            <s.OpenCartCotaier>
                <s.CartIconContainer>
                    <s.CartItensNumberCircule>
                        <s.CartItensNumber>100</s.CartItensNumber>
                    </s.CartItensNumberCircule>
                    <s.ShoppingBagIcon src={shoppingBagIcon}/>
                </s.CartIconContainer>
                <s.TotalPriceContainer>
                    <s.PriceRow>
                        <s.RealSign>R$</s.RealSign>
                        <s.Price>10,00</s.Price>
                    </s.PriceRow>
                    <s.OpenCartRow>
                        <s.OpenCloseCart>FECHAR</s.OpenCloseCart>
                        <s.OpenCloseIcon src={upArrow}></s.OpenCloseIcon>
                    </s.OpenCartRow>
                </s.TotalPriceContainer>
            </s.OpenCartCotaier>
            <s.FinalizePurchaseContainer>
                <s.FinalizePurchaseText>
                    FINALIZAR A COMPRA
                </s.FinalizePurchaseText>
            </s.FinalizePurchaseContainer>
        </s.CartContainer>
    )
}

export default Cart