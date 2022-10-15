import { useContext, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { Shopper } from "../../globalState/Context";
import * as s from "./style";
import Cart from "../../components/cart/Cart";
import Header from "../../components/header/Header";
import PopUp from "../../components/popUp/PopUp";
import ShoppingBag from "../../components/shoppingBag/ShoppingBag";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const { GetAllProductsInStock, products, displayShoppingBag, displayPopUp } = useContext(Shopper);
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { GetAllProductsInStock();}, []);

  return (
    <s.ScreenContainer>
      <Header navigate={navigate}/>
      <Cart/>
      {displayShoppingBag && <ShoppingBag/>}
      {displayPopUp && <PopUp/>}
      <s.MainContainer>
        {products.length > 0 && <ProductCard/>}
      </s.MainContainer>
    </s.ScreenContainer>
  );
};

export default MainPage;
