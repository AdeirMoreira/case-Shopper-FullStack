import * as s from "./Style";
import shoppingBagIcon from "../../assets/images/shopping-bag.png";
import upArrow from "../../assets/images/up-arrow.png";
import downArrow from "../../assets/images/down-arrow.png";
import { useContext } from "react";
import { Shopper } from "../../globalState/Context";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
	const { purchaseData, displayShoppingBag, openCloseShoppingBag, checkCartIsEmpety } = useContext(Shopper);
	const navigate = useNavigate();

	return (
		<s.CartContainer>
			<s.OpenCartCotaier onClick={() => openCloseShoppingBag()}>
				<s.CartIconContainer>
					<s.CartItensNumberCircule>
						<s.CartItensNumber>{purchaseData.totalPurchaseItens}</s.CartItensNumber>
					</s.CartItensNumberCircule>
					<s.ShoppingBagIcon src={shoppingBagIcon} />
				</s.CartIconContainer>
				<s.TotalPriceContainer>
					<s.PriceRow>
						<s.RealSign>R$</s.RealSign>
						<s.Price>{purchaseData.totalPurchasePrice.toFixed(2).replace(".", ",")}</s.Price>
					</s.PriceRow>
					<s.OpenCartRow>
						<s.OpenCloseCart>{displayShoppingBag ? "FECHAR" : "ABRIR"}</s.OpenCloseCart>
						<s.OpenCloseIcon src={displayShoppingBag ? upArrow : downArrow} />
					</s.OpenCartRow>
				</s.TotalPriceContainer>
			</s.OpenCartCotaier>
			{!displayShoppingBag && (
				<s.FinalizePurchaseContainer onClick={() => checkCartIsEmpety(navigate)}>
					<s.FinalizePurchaseText>FINALIZAR A COMPRA</s.FinalizePurchaseText>
				</s.FinalizePurchaseContainer>
			)}
		</s.CartContainer>
	);
};

export default Cart;
