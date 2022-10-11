import * as s from './Style'
import shopperlogo from '../../assets/images/logo-shopper-01.png'
import addIcon from '../../assets/images/plus.png'
import removeIcon from '../../assets/images/negative.png'
import trashIcon from '../../assets/images/trash.png'

const ShoppingBag = () => {
    return(
        // <>
        // {}
        // </>
        <s.ShoppingBagContainer>
            <s.ProductGrid>
                <s.Photo>
                    <s.ProductImg src={shopperlogo} />
                </s.Photo>
                <s.Name>
                    <s.ProductName>Óleo de Peroba</s.ProductName>
                </s.Name>
                <s.Delele>
                    <s.TrashIncon src={trashIcon}/>
                </s.Delele>
                <s.Price>
                    <s.ProductPrice>R$ 150,00</s.ProductPrice>
                </s.Price>
                <s.Remove>
                    <s.RemoveIncon src={removeIcon}/>
                </s.Remove>
                <s.Quantity>
                    <s.QuantityNumber>2</s.QuantityNumber>
                </s.Quantity>
                <s.Add>
                    <s.AddIncon src={addIcon}/>
                </s.Add>
            </s.ProductGrid>
            <s.FinishButton>FINALIZAR</s.FinishButton>
        </s.ShoppingBagContainer>
    )
}

export default ShoppingBag