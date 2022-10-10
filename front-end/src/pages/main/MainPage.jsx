import { useContext, useEffect } from "react";
import ProductCard from "../../components/productCard/productCard";
import { Shopper } from "../../globalState/Context";
import { GetAllProducts } from "../../service/cartPage";
import * as s from "./style";

const MainPage = () => {
  const { setProducts, products } = useContext(Shopper);
  console.log(products)
  useEffect(() => {
    GetAllProducts(setProducts);
  }, [setProducts]);

  return (
    <s.ScreenContainer>
      <s.HeaderContainer>
        <s.SectionTitle></s.SectionTitle>
      </s.HeaderContainer>
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
