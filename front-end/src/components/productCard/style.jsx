import styled from "styled-components";

export const CardContainer = styled.div`
    width: 15em;
    height: 20em;
    display: flex;
    flex-direction: column;
    background-color: white;
    border:  0.2em solid rgb(245,245,245);
    border-radius: 3%;
    gap: 1em;
`

export const ImgProduct = styled.img`
    width: 100%;
    height: 9em;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductName = styled.p`
    font-size: 0.8em;
    color: rgb(119,120,121);
    text-align: center;
    margin: 0;
    height: 3em;
`

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
`

export const ProducPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const RealSign = styled.span`
    color: rgb(159,159,162);
    font-size: 1em;
`

export const ProductPrice = styled.span`
    color: rgb(45,167,122);
    font-size: 1.3em;
    font-weight: bold;
`

export const ProductStockContainer = styled.div`
    display: flex ;
    flex-direction: row;
    gap: 0.3em;
    align-items: center;
`
export const ProductStock = styled.span`
    color: rgb(45,167,122);
    font-size: 1.3em;
    font-weight: bold;
`

export const ProductStockQuantity = styled.span`
    color: rgb(159,159,162);
    font-weight: bold;
    font-size: 1.3em;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const AddButton = styled.button`
    background-color: white;
    border: 1px solid rgb(45,167,122);
    border-radius: 1em;
    font-size: 1em;
    font-weight: bold;
    width: 7em;
    height: 2em;
    color: rgb(45,167,122);
    
`
