import * as s from './Style'
import shopperlogo from '../../assets/images/logo-shopper-01.png'
import addIcon from '../../assets/images/plus.png'
import removeIcon from '../../assets/images/negative.png'
import trashIcon from '../../assets/images/trash.png'
import { useContext } from 'react'
import { Shopper } from '../../globalState/Context'
import { useNavigate } from 'react-router-dom'
import { goToCheckOutPage } from '../../routes/Coordinators'

const ShoppingBag = () => {
    const { cart, removeFromCart, removeFromCartDirectly, checkQuantityPurchased, checkCartIsEmpety } = useContext(Shopper);
    const navigate = useNavigate()

    return(
        <s.ShoppingBagContainer>
            <s.ProcuctGridContainer>
                {cart && cart.map(product => {
                return (
                        <s.ProductGrid key={product.id}>
                            <s.Photo>
                                <s.ProductImg src={shopperlogo} />
                            </s.Photo>
                            <s.Name>
                                <s.ProductName>{product.name}</s.ProductName>
                            </s.Name>
                            <s.Delele>
                                <s.IconButton onClick={()=> removeFromCartDirectly(product)}>
                                    <s.TrashIncon src={trashIcon}/>
                                </s.IconButton>
                            </s.Delele>
                            <s.Price>
                                <s.ProductPrice>R$ {product.price}</s.ProductPrice>
                            </s.Price>
                            <s.Remove>
                                <s.IconButton onClick={()=> removeFromCart(product)}>
                                    <s.RemoveIncon src={removeIcon}/>
                                </s.IconButton>
                            </s.Remove>
                            <s.Quantity>
                                <s.QuantityNumber>{product.qty_purchased}</s.QuantityNumber>
                            </s.Quantity>
                            <s.Add>
                                <s.IconButton onClick={()=> checkQuantityPurchased(product)}>
                                    <s.AddIncon src={addIcon}/>
                                </s.IconButton>
                            </s.Add>
                        </s.ProductGrid>
                )
            })
            }
            </s.ProcuctGridContainer>
            <s.FinishButton onClick={()=> checkCartIsEmpety(navigate)}>FINALIZAR</s.FinishButton>
        </s.ShoppingBagContainer>
    )
}

export default ShoppingBag