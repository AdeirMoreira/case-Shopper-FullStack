import styled from "styled-components";

export const ShippingCotainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 8em;
    align-items: center;
`
export const ShopperTruckImg = styled.img`
    width: 20em;
    height: 20em;
`

export const OrderDispatched = styled.p`
    font-size: 1.5em;
    color: RGB(45, 167, 122);
`

export const ReturnToPurchasesButton = styled.button`
    background-color: white;
    padding: 0.5em 3em 0.5em 3em;
    border-radius: 3em;
    font-size: 1em;
    color: rgb(68,68,109);
    :hover{
        background-color: rgb(68,68,109);
        color: white;
    }
`