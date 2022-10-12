import Header from "../../components/header/Header"
import * as s from './Style'
import clipBordIcon from '../../assets/images/clipboard.png'
import sentIcon from '../../assets/images/sent.png'
import shoppingCartIcon from '../../assets/images/shopping-Cart.png'
import shopperTruck from '../../assets/images/shopperTruck.png'
import shopperLogo from '../../assets/images/logo-shopper-01.png'

const CheckOutPage = () => {
    return(
        <>
            <Header/>
            <s.CheckOutContainer>
                <s.ProgresContainer>
                    <s.ProgressBarContainer>
                        <s.CirculeGreen>
                            <s.StepIcon src={shoppingCartIcon}/>
                        </s.CirculeGreen>
                        <s.LineGreen>
                        </s.LineGreen>
                        <s.CirculeGreen>
                            <s.StepIcon src={clipBordIcon}/>
                        </s.CirculeGreen>
                        <s.LineGreen>                   
                        </s.LineGreen>
                        <s.CirculeGreen>
                            <s.StepIcon src={sentIcon}/>
                        </s.CirculeGreen>
                    </s.ProgressBarContainer>
                    <s.StepTextContainer>
                        <s.StepText>Carrinho</s.StepText>
                        <s.StepText>Chegagem</s.StepText>
                        <s.StepText>Envio</s.StepText>
                    </s.StepTextContainer>
                </s.ProgresContainer>
                <s.UserDataInputContainer>
                    <s.UserNameInputContainer>
                        <s.UserNameLabel>Nome</s.UserNameLabel>
                        <s.UserNameInput type={'text'} placeholder="Digite seu nome"/>
                    </s.UserNameInputContainer>
                    <s.DeliveryDatainputContainer>
                        <s.DeliveryDataLabel>Data de Entrega</s.DeliveryDataLabel>
                        <s.DeliveryDataInput type={'date'}/>
                    </s.DeliveryDatainputContainer>
                </s.UserDataInputContainer>
                <s.NavigationbuttonsContainer>
                    <s.NagationButton>Voltar às compras</s.NagationButton>
                    <s.NagationButton>Finalizar compra</s.NagationButton>
                </s.NavigationbuttonsContainer>
                <s.BasketContainer>
                    <s.TruckBox>
                        <s.truckImg src={shopperTruck}/>
                    </s.TruckBox>
                    <s.BasketBox>
                        <s.BaskText>Total do Pedido</s.BaskText>
                        <s.BaskPrice>R$ 300,00</s.BaskPrice>
                    </s.BasketBox>
                </s.BasketContainer>
                <s.ProducPurchasedTable>
                    <s.ProductPurchaseTitleTableGrid>
                    <s.Product>
                        <s.GrayText>Produto</s.GrayText>
                    </s.Product>
                    <s.Price>
                        <s.BlueText>Preço Shopper.com.br</s.BlueText>
                    </s.Price>
                    <s.Quantity>
                        <s.GrayText>Quantidade</s.GrayText>
                    </s.Quantity>
                    <s.TotalPrice>
                        <s.BlueText>Valor Total</s.BlueText>
                    </s.TotalPrice>
                    </s.ProductPurchaseTitleTableGrid>
                    <s.ProductPurchasedTableRowGrid>
                    <s.Photo>
                        <s.ShopperLogo src={shopperLogo}/>
                    </s.Photo>
                    <s.ProductName>
                        <s.GrayText>Óleo do Peroba</s.GrayText>
                    </s.ProductName>
                    <s.ProductPrice>
                        <s.BlueText>R$ 129,00</s.BlueText>
                    </s.ProductPrice>
                    <s.ProductQuantity>
                        <s.GrayText>50</s.GrayText>
                    </s.ProductQuantity>
                    <s.ProductTotalPrice>
                        <s.BlueText>R$ 500,00</s.BlueText>
                    </s.ProductTotalPrice>
                </s.ProductPurchasedTableRowGrid>
                
                </s.ProducPurchasedTable>
            </s.CheckOutContainer>
        </>
    )
}

export default CheckOutPage