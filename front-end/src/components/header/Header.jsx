import * as s from "./Style";
import magnifyingGlassIcon from "../../assets/images/magnifying-glass.png";
import shopperLogo from "../../assets/images/shopper-logo.png";

export const Header = () => {
  return (
    <s.HeaderContainer>
      <s.TitleContainer>
        <s.TitleRow>
          <s.ShopperLogoImg src={shopperLogo} />
          <s.Title>shopper</s.Title>
        </s.TitleRow>
        <s.Subtitle>compra programada</s.Subtitle>
      </s.TitleContainer>
      <s.SearchContainer>
        <s.InputSearchProduct
          name="productSearch"
          placeholder="O que você procura?"
          type={"text"}
        />
        <s.InputSearchButton>
          <s.MagnifyingGlassIcon
            src={magnifyingGlassIcon}
          ></s.MagnifyingGlassIcon>
          Buscar
        </s.InputSearchButton>
      </s.SearchContainer>
    </s.HeaderContainer>
  );
};

export default Header;
