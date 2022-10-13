import styled from "styled-components";

export const CheckOutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6em 0em 0em 0em;
    align-items: center;
    gap: 2.5em;
    padding-bottom: 3em;
    @media screen and (max-width: 800px) {
        padding-top: 9em;
    }
`
export const ProgresContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const StepTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8.5em;
`
export const StepText = styled.span`
    color: RGB(45, 167, 122);
`

export const CirculeGreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: RGB(45, 167, 122);
    height: 2.5em;
    width: 2.5em;
    border-radius: 100%;
`
export const LineGreen = styled.div`
    width: 10em;
    height: 0.4em;
    background-color: RGB(45, 167, 122);
`
export const StepIcon = styled.img`
    width: 1.5em;
    height: 1.5em;
`

export const UserDataInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    
`
export const UserNameInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`
export const UserNameInput = styled.input`
    width: 20em;
    border: 0.1em solid RGB(45, 167, 122);
    border-radius: 1em;
    padding: 0.2em 0.5em 0.2em 0.5em;
    font-size: 1em;
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`
export const UserNameLabel = styled.label`
    font-size: 1.5em;
    color: RGB(45, 167, 122);
`
export const DeliveryDatainputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`
export const DeliveryDataInput = styled.input`
    border: 0.1em solid RGB(45, 167, 122);
    border-radius: 1em;
    padding: 0.3em;
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`
export const DeliveryDataLabel = styled.label`
    font-size: 1.5em;
    color: RGB(45, 167, 122);
`

export const NavigationbuttonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5em;
` 
export const NagationButton = styled.button`
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
export const ProducPurchasedTable = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProductPurchaseTitleTableGrid = styled.div`
    display: grid;
    grid-template: 
    "product product price quantity totalPrice" 4em
    /* "photo productName productPrice productQuantity productTotalPrice" 4em */
    / 4em 15em 10em 10em 10em;
`
export const Product = styled.div`
    grid-area: product;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(249,249,249);
`
export const Price = styled.div`
    grid-area: price;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgb(249,249,249);
`
export const Quantity = styled.div`
    grid-area: quantity;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(249,249,249);
`
export const TotalPrice = styled.div`
    grid-area: totalPrice;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(249,249,249);
`
export const Photo = styled.div`
    grid-area: photo;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2em solid rgb(211,211,211);
`
export const ProductPurchasedTableRowGrid = styled.div`
    display: grid;
    grid-template: 
    /* "product product price quantity totalPrice" 4em */
    "photo productName productPrice productQuantity productTotalPrice" 6em
    / 4em 20em 10em 10em 10em;

`
export const ProductName = styled.div`
    grid-area: productName;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2em solid rgb(211,211,211);
`
export const ProductPrice = styled.div`
    grid-area: productPrice;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2em solid rgb(211,211,211);
`
export const ProductQuantity = styled.div`
    grid-area: productQuantity;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2em solid rgb(211,211,211);
`
export const ProductTotalPrice = styled.div`
    grid-area: productTotalPrice;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2em solid rgb(211,211,211);
`
export const GrayText = styled.span`
    color: rgb(122,122,123);
    font-size: 1.2em;
    text-align: center;
    margin: 0;
`
export const BlueText = styled.span`
    color: rgb(0,45,98);
    font-size: 1.2em;
    text-align: center;
    margin: 0;
`
export const ShopperLogo = styled.img`
    width: 100%;
    height: 100%;
`
