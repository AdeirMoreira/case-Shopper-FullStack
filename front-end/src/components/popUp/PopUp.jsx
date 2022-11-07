import { useContext } from "react";
import { Shopper } from "../../globalState/Context";
import * as s from "./Style";

const PopUp = () => {
	const { setDisplayPopUp, popUpMessage } = useContext(Shopper);

	return (
		<s.PopUpContainer>
			<s.PopUpMessage>
				<s.StockLimitText>{popUpMessage[0]}</s.StockLimitText>
				<s.StockLimitDescription>{popUpMessage[1]}</s.StockLimitDescription>
				<s.CloseButton onClick={() => setDisplayPopUp(false)}>ENTENDI</s.CloseButton>
			</s.PopUpMessage>
		</s.PopUpContainer>
	);
};

export default PopUp;
