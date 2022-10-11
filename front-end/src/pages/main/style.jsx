import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

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
    width: 70%;
    background-color: white;
`

export const InputSearchProduct = styled.input`
    width: 100%;
    height: 2em;
    /* padding: 0em 1em 0em 1em; */
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
    /* border: 0.1em solid rgb(45,167,122); */
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

export const CartSection = styled.section`

`

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    background-color: white;
    display: flex;
    justify-content: center;
    gap: 1em;
    padding-top: 5em;
`


export const SectionProducts = styled.section`
    width: 90em;
    flex-direction: row;
    gap: 1em;
    justify-content: center;
`
export const ArticleCardProducts = styled.article`
    width: 15em;
    height: 20em;
    background-color: white;
`

export const Cima = styled.div`
    height: 50px;
    width: 500px;
    background-color: red;
`
export const Meio = styled.div`
    background-color: blue;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Baixo = styled.div`
    height: 50px;
    width: 500px;
    background-color: green;
`

export const Caixa = styled.div`
    height: 200px;
    width: 200px;
    background-color: black;
`


