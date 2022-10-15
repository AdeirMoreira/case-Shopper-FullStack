import styled from "styled-components"

export const BasketContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const TruckBox = styled.div`
    border-bottom: 0.1em solid rgb(238,238,238);
    border-top: 0.1em solid rgb(238,238,238);
`
export const truckImg = styled.img`
    width: 100%;
    height: 100%;
`
export const BasketBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    gap: 1em;
    background-color: rgb(249,249,249);
    border-bottom: 0.1em solid rgb(238,238,238);
    border-left: 0.1em solid rgb(238,238,238);
    border-top: 0.1em solid rgb(238,238,238);
`
export const BaskText = styled.span`
    color: rgb(122,122,123);
    text-align: center;
    font-size: 1em;
    font-weight: bold;
`
export const BaskPrice = styled.span`
    color: rgb(0,45,98);
    font-size: 2em;
    font-weight: bold;
`