import styled from "styled-components"

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
export const LastCirculeGreen = styled(CirculeGreen)`
    background-color: ${({page}) => page ===  'ckeckOut' ? `white` : `RGB(45, 167, 122)`};
    border: 0.1em solid RGB(45, 167, 122);
`
export const LineGreen = styled.div`
    width: 10em;
    height: 0.4em;
    background-color: RGB(45, 167, 122);
`
export const LastLineGreen =  styled(LineGreen)`
    background-color: ${({page}) => page ===  'ckeckOut' ? `white` : `RGB(45, 167, 122)`};
    border: 0.1em solid RGB(45, 167, 122);
`
export const StepIcon = styled.img`
    width: 1.5em;
    height: 1.5em;
`