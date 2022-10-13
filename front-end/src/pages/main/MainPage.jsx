import { useContext, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { Shopper } from "../../globalState/Context";
import { GetAllProducts } from "../../service/cartPage";
import * as s from "./style";
import Cart from "../../components/cart/Cart";
import Header from "../../components/header/Header";
import PopUp from "../../components/popUp/PopUp";
import ShoppingBag from "../../components/shoppingBag/ShoppingBag";

const MainPage = () => {
  const { GetAllProductsInStock, products, displayShoppingBag } = useContext(Shopper);

  useEffect(() => { GetAllProductsInStock();}, []);

  return (
    <s.ScreenContainer>
      <Header/>
      <Cart/>
      {displayShoppingBag && <ShoppingBag/>}
      {/* <PopUp/> */}
      <s.MainContainer>
        {products.length > 0 && <ProductCard/>}
      </s.MainContainer>
    </s.ScreenContainer>
  );
};

export default MainPage;
