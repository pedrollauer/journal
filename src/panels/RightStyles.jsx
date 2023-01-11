import styled from 'styled-components'

export const ContexMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: ${props => props.position.y+'px'};
    left: ${props => props.position.x+'px'};
    width: 200px; 
    visibility: ${props => props.visibility==true?'visible':'hidden'};
    z-index: 200;
`

export const Button = styled.button`
    width:100%;
    border: none;
    outline: none;
    text-align: left;

    &:hover{
        background-color: blue;
    }
`