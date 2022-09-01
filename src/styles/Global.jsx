import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
        width:100%;
        height:100vh;
        margin:0px;

}
hr{
        background-color:white;
}
#root{
        height:100%;
        margin:0px;

}

.App{
        height:100%;
        margin:0px;

}
`

export const Container = styled.div`
background-color:darkgreen;
width:100%;
height:100%;    
display:grid;
grid-template-columns:20% 30% 50%;
`

