import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const HeaderContainer = styled.header`
    background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em;
`

export const SectionTitle = styled.section`
    height: 3em;
    width: 80em;
    background-color: white;
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
    /* height: 50px;
    width: 500px; */
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


