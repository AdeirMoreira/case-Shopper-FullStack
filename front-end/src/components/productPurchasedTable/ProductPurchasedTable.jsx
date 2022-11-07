import { useContext } from "react";
import { Shopper } from "../../globalState/Context";
import * as s from "./Style";
import shopperLogo from "../../assets/images/logo-shopper-01.png";

const ProductPurchasedTableComponet = () => {
	const { cart } = useContext(Shopper);

	return (
		<s.ProducPurchasedTable>
			<s.ProductPurchaseTitleTableGrid>
				<s.Product>
					<s.GrayText>Produto</s.GrayText>
				</s.Product>
				<s.Price>
					<s.BlueText>Preço Shopper.com.br</s.BlueText>
				</s.Price>
				<s.Quantity>
					<s.GrayText>Quantidade</s.GrayText>
				</s.Quantity>
				<s.TotalPrice>
					<s.BlueText>Valor Total</s.BlueText>
				</s.TotalPrice>
			</s.ProductPurchaseTitleTableGrid>
			<>
				{cart.length > 0 &&
					cart.map((product) => {
						return (
							<s.ProductPurchasedTableRowGrid key={product.id}>
								<s.Photo>
									<s.ShopperLogo src={shopperLogo} />
								</s.Photo>
								<s.ProductName>
									<s.GrayText>{product.name}</s.GrayText>
								</s.ProductName>
								<s.ProductPrice>
									<s.BlueText>R$ {product.price.toFixed(2).replace(".", ",")}</s.BlueText>
								</s.ProductPrice>
								<s.ProductQuantity>
									<s.GrayText>{product.qty_purchased}</s.GrayText>
								</s.ProductQuantity>
								<s.ProductTotalPrice>
									<s.BlueText>R$ {product.totalPrice.toFixed(2).replace(".", ",")}</s.BlueText>
								</s.ProductTotalPrice>
							</s.ProductPurchasedTableRowGrid>
						);
					})}
			</>
		</s.ProducPurchasedTable>
	);
};

export default ProductPurchasedTableComponet;
