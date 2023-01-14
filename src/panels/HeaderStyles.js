import styled from 'styled-components'

export const HFrame = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
`
export const HContainer = styled.div`
position: relative;
width: 100%;
height: 50px;
background-color:#202325;
`
export const Title = styled.div`
        height: 100%;
        font-size:25px;        
        border-sizing: boder-box;
        padding-top: 10px;
        text-align:center;
        color: white;

        @media screen and (max-width: 700px){
            text-align: left;
            margin-left: 10px;
        }
`

export const Login= styled.button`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 80px;
    height: 100%;
    background-color: black;
    border: none;
    outline: none;
    color: white;
`
