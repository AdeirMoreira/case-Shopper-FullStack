import styled from "styled-components";

export const CartContainer = styled.div`
    width: 12em;
    height: 8em;
    position: fixed;
    right: 0.3em;
    top: 0.3em;
`
export const OpenCartCotaier = styled.div`
    background-color: rgb(0,45,98);
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const CartIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.4em 0em 0em 0.7em;
`
export const CartItensNumberCircule = styled.div`
    border-radius: 100%;
    width: 1.5em;
    height: 1.5em;
    background-color: rgb(45,167,122);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CartItensNumber = styled.span`
    color: white;
    font-size: 0.6em;
    font-weight: 700;
`
export const ShoppingBagIcon = styled.img`
    width: 1.7em;
    height: 1.7em;
`
export const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const PriceRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-right: 0.5em;
    justify-content: flex-end;
`
export const OpenCartRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    justify-content: flex-end;
    padding-right: 0.5em;
`
export const OpenCloseCart = styled.span`
    color: white;
    font-size: 1em;
`
export const OpenCloseIcon = styled.img`
    width: 1em;
    height: 1em;
    align-self: center;
`
export const RealSign = styled.span`
    color: white;
    padding : 0em 0.1em 0.2em;
    font-size: 0.7em;
`
export const Price = styled.span`
    color: white;
    font-size: 1.6em;
    font-weight: bold;
`
export const FinalizePurchaseContainer = styled.div`
    background-color: rgb(45,167,122);
    width: 100%;
    height: 50%;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FinalizePurchaseText = styled.span`
    font-size: 1.1em;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0em 0.5em 0em 0.5em;
    font-weight: 500;
`