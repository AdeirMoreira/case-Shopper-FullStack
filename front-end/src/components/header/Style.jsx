import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: linear-gradient(180deg, rgb(255,255,255),rgb(221,221,221));
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em 0.5em 0.5em 2em;
    gap: 1em;
    flex-wrap: wrap;
    position: fixed;
    width: 100%;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const TitleRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.1em;
`
export const ShopperLogoImg = styled.img`
    width: 1.8em;
    height: 1.8em;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 1.5em;
    color: rgb(21,26,51);
`
export const Subtitle = styled.h2`
    margin: 0;
    font-size: 0.8em;
    color: rgb(91,133,197);
`
export const SearchContainer = styled.div`
    border:  0.1em solid rgb(236,236,236);
    border-radius: 4em;
    padding-left: 1em;
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    width: 74%;
    @media screen and (max-width: 1500px) {
        width: 70%;
    }
    @media screen and (max-width: 1300px) {
        width: 60%;
    }
    @media screen and (max-width: 1000px) {
        width: 50%;
    }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Xbutton = styled.button`
    height: fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;
`
export const XIcon = styled.img`

`
export const InputSearchProduct = styled.input`
    width: 100%;
    height: 2em;
    font-size: 1.3em;
    border: none;
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const InputSearchButton = styled.button`
    height: 3em;
    width: 7em;
    border-radius: 4em;
    background-color: rgb(45,167,122);
    color: white;
    font-size: 1em;
    border: none;
    :hover{
        color: white;
        background-color: rgb(32,123,90);
    }
`

export const MagnifyingGlassIcon = styled.img`
    width: 0.8em;
    height: 0.8em;
    padding-right: 0.5em;
`