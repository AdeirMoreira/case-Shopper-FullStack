import Header from "../../components/header/Header"
import * as s from './Style'
import clipBordIcon from '../../assets/images/clipboard.png'
import sentIcon from '../../assets/images/sent.png'
import shoppingCartIcon from '../../assets/images/shopping-Cart.png'
import shopperTruck from '../../assets/images/shopperTruck.png'
import shopperLogo from '../../assets/images/logo-shopper-01.png'
import { useNavigate } from "react-router-dom"
import { goBack, goToShippingPage } from "../../routes/Coordinators"
import { useContext } from "react"
import { Shopper } from "../../globalState/Context"

const CheckOutPage = () => {
    const navigate = useNavigate()
    const { purchaseData, cart, name, handleName, deliveryDate, handleDate } = useContext(Shopper)
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
                        <s.UserNameInput value={name} name={'name'} onChange={handleName} type={'text'} placeholder="Digite seu nome"/>
                    </s.UserNameInputContainer>
                    <s.DeliveryDatainputContainer>
                        <s.DeliveryDataLabel>Data de Entrega</s.DeliveryDataLabel>
                        <s.DeliveryDataInput value={deliveryDate} onChange={handleDate} type={'date'}/>
                    </s.DeliveryDatainputContainer>
                </s.UserDataInputContainer>
                <s.NavigationbuttonsContainer>
                    <s.NagationButton onClick={()=> goBack(navigate)}>Voltar às compras</s.NagationButton>
                    <s.NagationButton onClick={()=> goToShippingPage(navigate)}>Finalizar compra</s.NagationButton>
                </s.NavigationbuttonsContainer>
                <s.BasketContainer>
                    <s.TruckBox>
                        <s.truckImg src={shopperTruck}/>
                    </s.TruckBox>
                    <s.BasketBox>
                        <s.BaskText>Total do Pedido</s.BaskText>
                        <s.BaskPrice>R$ {purchaseData.totalPurchasePrice.toFixed(2).replace('.', ',')}</s.BaskPrice>
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
                    <>
                        {cart.length > 0 && cart.map(product => {
                            return (
                                <s.ProductPurchasedTableRowGrid key={product.id}>
                                <s.Photo>
                                    <s.ShopperLogo src={shopperLogo}/>
                                </s.Photo>
                                <s.ProductName>
                                    <s.GrayText>{product.name}</s.GrayText>
                                </s.ProductName>
                                <s.ProductPrice>
                                    <s.BlueText>R$ {product.price.toFixed(2).replace('.', ',')}</s.BlueText>
                                </s.ProductPrice>
                                <s.ProductQuantity>
                                    <s.GrayText>{product.qty_purchased}</s.GrayText>
                                </s.ProductQuantity>
                                <s.ProductTotalPrice>
                                    <s.BlueText>R$ {product.totalPrice.toFixed(2).replace('.', ',')}</s.BlueText>
                                </s.ProductTotalPrice>
                                </s.ProductPurchasedTableRowGrid>
                            )
                        })}
                    </>
                </s.ProducPurchasedTable>
            </s.CheckOutContainer>
        </>
    )
}

export default CheckOutPage