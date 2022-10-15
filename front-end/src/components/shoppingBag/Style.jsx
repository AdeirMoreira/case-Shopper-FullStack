import styled from "styled-components";

export const ShoppingBagContainer = styled.div`
    width: 25em;
    height: 40em;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: fixed;
    right: 0.3em;
    top: 4.5em;
    border-radius: 0.5em;
    border-top: 0.2em solid RGB(140, 207, 182);
`
export const ProcuctGridContainer = styled.div`
    overflow: auto;
    padding-bottom: 1.3em;
`
export const ProductGrid = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    grid-template: 
    "photo name name name name delete" 3em
    "photo price remove quantity add ." 2em
    / 5em 9em 1.5em 3em 1.5em 3.4em;
    border-bottom: 0.2em solid rgb(241,241,241);
    padding: 1em 0em 1em 0em;
`

export const Photo = styled.div`
    grid-area: photo;
`
export const Name = styled.div`
    grid-area: name;
    display: flex;
    justify-items: center;
    justify-content: center;
    font-size: 1.2em;
`
export const Delele = styled.div`
    grid-area: delete;
    display: flex;
    justify-items: center;
    justify-content: center;
`
export const Price = styled.div`
    grid-area: price;
    display: flex;
    justify-items: center;
    justify-content: center;
`
export const Remove = styled.div`
    grid-area: remove;
    display: flex;
    justify-items: center;
    justify-content: center;
`
export const Quantity = styled.div`
    grid-area: quantity;
    border-radius: 1em;
    height: 1.5em;
    border: 0.1em solid rgb(214,214,214);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const QuantityNumber = styled.span`
    color: rgb(102,102,102);
    display: flex;
    justify-items: center;
    justify-content: center;
    font-weight: bold;
`
export const Add = styled.div`
    grid-area: add;
    display: flex;
    justify-items: center;
    justify-content: center;
`

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
`
export const ProductName = styled.span`
    font-size: 0.8em;
    color: rgb(119,120,121);
    text-align: center;
    margin: 0;
`
export const TrashIncon = styled.img`
    width: 1.5em;
    height: 1.5em;
`

export const ProductPrice = styled.span`
    color: rgb(45,167,122);
    font-size: 1em;
    font-weight: bold;
`
export const IconButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 0em;
`
export const RemoveIncon = styled.img`
    width: 1.5em;
    height: 1.5em;
`
export const AddIncon = styled.img`
    width: 1.5em;
    height: 1.5em;
`
export const FinishButton = styled.button`
    background-color: RGB(45, 167, 122);
    width: 100%;
    height: 3em;
    border: none;
    color: white;
    font-weight: bold;
    letter-spacing: 0.1em;
    align-content: flex-end;
    position: absolute;
    bottom: 0em;
`