import * as s from "./style";
import shopperLogo from "../../assets/images/logo-shopper-01.png";

const ProductCard = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product) => {
        return (
          <s.CardContainer key={product.id}>
            <s.ImgProduct src={shopperLogo}></s.ImgProduct>
            <s.ProductName>{product.name}</s.ProductName>
            <s.ProductInfoContainer>
                <s.ProducPriceContainer>
                    <s.RealSign>R$</s.RealSign>
                    <s.ProductPrice>{product.price}</s.ProductPrice>
                </s.ProducPriceContainer>
                <s.ProductStockContainer>
                    <s.ProductStock>Estoque</s.ProductStock>
                    <s.ProductStockQuantity>{product.qty_stock}</s.ProductStockQuantity>
                </s.ProductStockContainer>
            </s.ProductInfoContainer>
            <s.ButtonContainer>
                <s.AddButton>+ Adicionar</s.AddButton>
            </s.ButtonContainer>
            </s.CardContainer>
        );
      })}
    </>
  );
};

export default ProductCard;