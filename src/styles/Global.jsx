import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

body{
        width:100%;
        height:100vh;
        margin:0px;
        overflow: hidden;
}

 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
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

@media screen and (max-width: 700px){
    overflow: hidden;
    display: block;
}
`

