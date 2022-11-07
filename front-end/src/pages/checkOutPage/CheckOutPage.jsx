import Header from "../../components/header/Header";
import * as s from "./Style";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinators";
import { useContext } from "react";
import { Shopper } from "../../globalState/Context";
import PopUp from "../../components/popUp/PopUp";
import ProductPurchasedTableComponet from "../../components/productPurchasedTable/ProductPurchasedTable";
import ProgresComponent from "../../components/progresBar/ProgresBar";
import UserDataInput from "../../components/userData/UserData";
import ProductsBasket from "../../components/productsBasket/ProductsBasket";

const CheckOutPage = () => {
	const navigate = useNavigate();
	const { checkNameAndDeliveryDate, displayPopUp } = useContext(Shopper);

	return (
		<>
			<Header navigate={navigate} />
			{displayPopUp && <PopUp />}
			<s.CheckOutContainer>
				<ProgresComponent page={"ckeckOut"} />
				<UserDataInput />
				<s.NavigationbuttonsContainer>
					<s.NagationButton onClick={() => goBack(navigate)}>Voltar às compras</s.NagationButton>
					<s.NagationButton onClick={() => checkNameAndDeliveryDate(navigate)}>
						Finalizar compra
					</s.NagationButton>
				</s.NavigationbuttonsContainer>
				<ProductsBasket />
				<ProductPurchasedTableComponet />
			</s.CheckOutContainer>
		</>
	);
};

export default CheckOutPage;
