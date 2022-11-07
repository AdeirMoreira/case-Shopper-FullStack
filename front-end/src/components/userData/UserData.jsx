import { useContext } from "react";
import { Shopper } from "../../globalState/Context";
import * as s from "./Style";
const UserDataInput = () => {
	const { name, handleName, deliveryDate, handleDate } = useContext(Shopper);

	return (
		<s.UserDataInputContainer>
			<s.UserNameInputContainer>
				<s.UserNameLabel>Nome</s.UserNameLabel>
				<s.UserNameInput
					value={name}
					name={"name"}
					onChange={handleName}
					type={"text"}
					placeholder="Digite seu nome"
				/>
			</s.UserNameInputContainer>
			<s.DeliveryDatainputContainer>
				<s.DeliveryDataLabel>Data de Entrega</s.DeliveryDataLabel>
				<s.DeliveryDataInput
					value={deliveryDate}
					onChange={handleDate}
					type={"date"}
					min={new Date().toISOString().slice(0, 10)}
				/>
			</s.DeliveryDatainputContainer>
		</s.UserDataInputContainer>
	);
};

export default UserDataInput;
