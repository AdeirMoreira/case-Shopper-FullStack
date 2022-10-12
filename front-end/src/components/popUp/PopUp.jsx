import * as s from './Style'

const PopUp = () => {
    const displayPopUp = false
    return(
        <>
            {
                displayPopUp && 
                    <s.PopUpContainer>
                        <s.PopUpMessage>
                            <s.StockLimitText>
                                Limite de estoque.
                            </s.StockLimitText>
                            <s.StockLimitDescription>
                                A Quantidade do produto X que você deseja comprar excede a 
                                quantidade disponivel em estoque.
                            </s.StockLimitDescription>
                            <s.CloseButton>ENTENDI</s.CloseButton>
                        </s.PopUpMessage>
                    </s.PopUpContainer>
            }
        </>
    )
    
}

export default PopUp