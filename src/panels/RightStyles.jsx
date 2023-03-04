import styled from 'styled-components'

export const ContexMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 5px; 
    background-color:#2e2e2e;
    top: ${props => props.position.y+'px'};
    left: ${props => props.position.x+'px'};
    width: 170px; 
    opacity: 0.85;
    visibility: ${props => props.visibility==true?'visible':'hidden'};
    z-index: 200;
`

export const Button = styled.button`
    width:100%;
    background-color:#2e2e2e;
    color: #FFFF;
    border: none;
    outline: none;
    text-align: left;

    &:hover{
        background-color: #123375;
    }
`
