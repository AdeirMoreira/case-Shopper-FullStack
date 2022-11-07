import * as s from "./Style";
import shopperLogo from "../../assets/images/logo-shopper-01.png";
import addIcon from "../../assets/images/plus.png";
import removeIcon from "../../assets/images/negative.png";
import { useContext } from "react";
import { Shopper } from "../../globalState/Context";

const ProductCard = () => {
	const { removeFromCart, products, searchTerm, checkQuantityPurchased } = useContext(Shopper);

	return (
		<>
			{products
				.filter((product) => product.name.toUpperCase().includes(searchTerm.toUpperCase()))
				.map((product) => {
					return (
						<s.CardContainer key={product.id}>
							<s.ImgProduct src={shopperLogo}></s.ImgProduct>
							<s.ProductName>{product.name}</s.ProductName>
							<s.ProductInfoContainer>
								<s.ProducPriceContainer>
									<s.RealSign>R$</s.RealSign>
									<s.ProductPrice>{product.price.toFixed(2).replace(".", ",")}</s.ProductPrice>
								</s.ProducPriceContainer>
								<s.ProductStockContainer>
									<s.ProductStock>Estoque</s.ProductStock>
									<s.ProductStockQuantity>{product.qty_stock}</s.ProductStockQuantity>
								</s.ProductStockContainer>
							</s.ProductInfoContainer>
							<s.ButtonContainer>
								{product.inCart ? (
									<s.ChangeQuantityContainer>
										<s.IconButton onClick={() => removeFromCart(product)}>
											<s.RemoveIncon src={removeIcon} />
										</s.IconButton>
										<s.Quantity>
											<s.QuantityNumber>{product.qty_purchased}</s.QuantityNumber>
										</s.Quantity>
										<s.IconButton onClick={() => checkQuantityPurchased(product)}>
											<s.AddIncon src={addIcon} />
										</s.IconButton>
									</s.ChangeQuantityContainer>
								) : (
									<s.AddButton onClick={() => checkQuantityPurchased(product)}>
										+ Adicionar
									</s.AddButton>
								)}
							</s.ButtonContainer>
						</s.CardContainer>
					);
				})}
		</>
	);
};

export default ProductCard;
