import * as s from "./Style";
import magnifyingGlassIcon from "../../assets/images/magnifying-glass.png";
import shopperLogo from "../../assets/images/shopper-logo.png";
import XButtonIcon from '../../assets/images/X-Button.png'
import { useContext } from "react";
import { Shopper } from "../../globalState/Context";

export const Header = ({navigate}) => {
  const {search, handleSearh, searchProduct, clearSearchTerm} = useContext(Shopper)
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
          value={search}
          onChange={handleSearh}
          />
          <s.InputContainer>
          {search && <s.Xbutton onClick={() => clearSearchTerm()}><s.XIcon src={XButtonIcon}/></s.Xbutton>}
        <s.InputSearchButton onClick={() => searchProduct(search,navigate)}>
          <s.MagnifyingGlassIcon
            src={magnifyingGlassIcon}
          ></s.MagnifyingGlassIcon>
          Buscar
        </s.InputSearchButton>
        </s.InputContainer>
      </s.SearchContainer>
    </s.HeaderContainer>
  );
};

export default Header;
