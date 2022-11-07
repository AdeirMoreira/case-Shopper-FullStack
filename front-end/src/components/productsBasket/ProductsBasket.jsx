import { useContext } from "react";
import { Shopper } from "../../globalState/Context";
import * as s from "./Style";
import shopperTruck from "../../assets/images/shopperTruck.png";

const ProductsBasket = () => {
	const { purchaseData } = useContext(Shopper);

	return (
		<s.BasketContainer>
			<s.TruckBox>
				<s.truckImg src={shopperTruck} />
			</s.TruckBox>
			<s.BasketBox>
				<s.BaskText>Total do Pedido</s.BaskText>
				<s.BaskPrice>R$ {purchaseData.totalPurchasePrice.toFixed(2).replace(".", ",")}</s.BaskPrice>
			</s.BasketBox>
		</s.BasketContainer>
	);
};

export default ProductsBasket;
