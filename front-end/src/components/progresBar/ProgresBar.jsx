import * as s from './Style'
import shoppingCartIcon from '../../assets/images/shopping-Cart.png'
import clipBordIcon from '../../assets/images/clipboard.png'
import sentIcon from '../../assets/images/sent.png'
import sentIconGreen from '../../assets/images/sentIconGreen.png'

const ProgresComponent = ({page}) => {
    return (
        <s.ProgresContainer>
            <s.ProgressBarContainer>
                <s.CirculeGreen>
                    <s.StepIcon src={shoppingCartIcon}/>
                </s.CirculeGreen>
                    <s.LineGreen></s.LineGreen>
                <s.CirculeGreen>
                    <s.StepIcon src={clipBordIcon}/>
                </s.CirculeGreen>
                    <s.LastLineGreen page={ page }></s.LastLineGreen>
                <s.LastCirculeGreen page={ page }>
                    <s.StepIcon src={page === 'ckeckOut' ? sentIconGreen : sentIcon}/>
                </s.LastCirculeGreen>
            </s.ProgressBarContainer>
            <s.StepTextContainer>
                <s.StepText>Carrinho</s.StepText>
                <s.StepText>Chegagem</s.StepText>
                <s.StepText>Envio</s.StepText>
            </s.StepTextContainer>
        </s.ProgresContainer>
    )
}

export default ProgresComponent