import { useContext, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { Shopper } from "../../globalState/Context";
import { GetAllProducts } from "../../service/cartPage";
import * as s from "./style";
import Cart from "../../components/cart/Cart";
import ShoppingBag from "../../components/shoppingBag/ShoppingBag";
import PopUp from "../../components/popUp/PopUp";
import Header from "../../components/header/Header";

const MainPage = () => {
  const { setProducts, products } = useContext(Shopper);
  console.log(products)
  useEffect(() => {
    GetAllProducts(setProducts);
  }, [setProducts]);

  return (
    <s.ScreenContainer>
      <Header/>
      <Cart/>
      {/* <ShoppingBag/>
      <PopUp /> */}
      <s.MainContainer>
        {products.length > 0 && <ProductCard products={products}/>}
      </s.MainContainer>
    </s.ScreenContainer>
  );
};

export default MainPage;
