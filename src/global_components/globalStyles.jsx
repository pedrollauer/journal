import styled from 'styled-components'
import {MdOutlineAdd} from 'react-icons/md'

export const NavMembrane = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    display: none;
    cursor: pointer;
    background-color: ${props => props.theme.strongest};
    @media screen and (max-width: 700px){
        display: block;
    }
`
export const NavContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`
export const SNavSec= styled.div`
    width: 100px;
    height: 100%;
    background-color:${props => props.colors[props.number]};
    padding: 15px 0px;
`

export const CNavSec = styled.div`
   display: flex;
   flex-direction: row;
   height:100%;
   z-index: ${props=>props.number};
   color: ${props => props.theme.text};
   font-size: 20px;
   text-align: center;
   overflow: hidden;

`
export const TNavSec= styled.div`
    width: 0px;
    height: 0px;
    border-top: 25px solid ${props => props.screen==props.number?'transparent':props.colors[props.number+1]};
    border-bottom: 25px solid  ${props => props.screen==props.number?'transparent':props.colors[props.number+1]};
    border-left: 25px solid ${props => props.colors[props.number]};
`
export const ColapsableStyle = styled.div`
display: ${props => props.collapsed?'none':'block'};

`
export const SectionTitle = styled.div`
        position: relative;
        font-size:18px;
        margin-left:5px;
button{
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 15px;
        color: ${props => props.theme.text};
}
        
`
export const RightButton = styled.button`
        position: absolute;
        float: right;
        width:60px; 
        height: 100%;
        top: 0px;
        right: 0px;
        margin:auto;
        border:none;
        font-size: 15px;
        font-weight: bold;
        background-color: red;
        padding-left: 20px;
        color: ${props => props.theme.text};
        visibility:${props => props.visibility=='fixed'?'visible':'hidden'}; 

`
export const SectionItem= styled.div`
        display: flex;
        flex-direction: row;
        position: relative;
        font-size:18px;
        box-sizing:border-box;
        padding-left:30px;
        padding-top:10px;
        padding-bottom:10px;
        background-color:${props => props.selected?props.theme.strongest:'transparent'};

        &:hover{
                background-color:${props => props.theme.strongest};
                cursor:pointer;
        }

        &:hover ${RightButton}{
        visibility:visible;
        background-color: transparent;
        }
        
`
export const SectionContainer= styled.div` 
        background-color: blue;
        height:30px;
        &:hover ${RightButton}{
        visibility:visible;
        }
        
`
export const MovePop = styled.div`
        position: absolute;
        z-index: 5;
        display: ${props => props.visibility?'block':'none'};
        width: 400px;
        height: 200px;
        top: 100px;
        right: 0px;
        left: 0px;
        margin: auto;
        background-color: ${props => props.theme.strong};
        color: ${props => props.theme.text};
        text-align: center;
        box-sizing: border-box;
        
        @media screen and (max-width: 700px){
            height: 150px;
            width: 100%;
            font-size; 60px;
        }

        div{
        
        color: ${props => props.theme.strongest};
        }

        label{
                margin: 10px 0px;
        }
       input{
                width: 75%;
        }
       button{
                margin: 10px;
        }
`
export const PopTitle = styled.div`
        margin-bottom: 20px;
        padding-top:10px;
        background-color: ${props => props.theme.strongest}; 
`
export const PContainer= styled.div`
        position: absolute;
        z-index: 5;
        display: ${props => props.visibility?'block':'none'};
        width: 400px;
        height: 150px;
        top: 100px;
        right: 0px;
        left: 0px;
        margin: auto;
        background-color: ${props => props.theme.strongest};
        color: ${props => props.theme.text};
        text-align: center;
        box-sizing: border-box;
        
        @media screen and (max-width: 700px){
            height: 150px;
            width: 100%;
            font-size; 60px;
        }

        label{
                margin: 10px 0px;
        }
       div{
        margin-bottom: 20px;
        padding-top:10px;
        background-color: ${props => props.theme.strong};
       }
       input{
                width: 75%;
        }
       button{
                margin: 10px;
        }
`

export const DButton = styled.button`
        background-color: ${props => props.theme.strongest}; 
        color: ${props => props.theme.text};
        border: solid;
        border-width: 1px;
`
export const Add = (props) =>{        

                return <RightButton visibility = {props.visibility} onClick={props.onClick} size={props.size}><MdOutlineAdd/></RightButton>
}
//hight: ${props => props.collapsed?'0px':'fit-content'};
