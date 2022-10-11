import { useContext, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { Shopper } from "../../globalState/Context";
import { GetAllProducts } from "../../service/cartPage";
import * as s from "./style";
import magnifyingGlassIcon from "../../assets/images/magnifying-glass.png"
import shopperLogo from "../../assets/images/shopper-logo.png"
import Cart from "../../components/cart/Cart";
import ShoppingBag from "../../components/shoppingBag/ShoppingBag";

const MainPage = () => {
  const { setProducts, products } = useContext(Shopper);
  console.log(products)
  useEffect(() => {
    GetAllProducts(setProducts);
  }, [setProducts]);

  return (
    <s.ScreenContainer>
      <s.HeaderContainer>
        <s.TitleContainer>
          <s.TitleRow>
            <s.ShopperLogoImg src={shopperLogo}/>
            <s.Title>shopper</s.Title>
          </s.TitleRow>
          <s.Subtitle>compra programada</s.Subtitle>
        </s.TitleContainer>
          <s.SearchContainer>
            <s.InputSearchProduct name="productSearch" placeholder="O que você procura?" type={'text'} />
            <s.InputSearchButton>
              <s.MagnifyingGlassIcon src={magnifyingGlassIcon}></s.MagnifyingGlassIcon>
                Buscar
            </s.InputSearchButton>
          </s.SearchContainer>
      </s.HeaderContainer>
      <Cart/>
      <ShoppingBag/>
      <s.MainContainer>
        {/* <s.SectionProducts> */}
        {products.length > 0 && <ProductCard products={products}/>}
        {/* </s.SectionProducts> */}
      </s.MainContainer>
      {/* <s.Cima/>
            <s.Meio>
                <s.Caixa/>
                <s.Caixa/>
                <s.Caixa/>
                <s.Caixa/>
            </s.Meio>
            <s.Baixo/> */}
    </s.ScreenContainer>
  );
};

export default MainPage;
