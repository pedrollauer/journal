import styled from 'styled-components'
import {MdOutlineAdd} from 'react-icons/md'

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
        font-weight: 900;
        background-color: red;
        color: ${props => props.theme.text};
        visibility:${props => props.visibility=='fixed'?'visible':'hidden'}; 

`
export const SectionItem= styled.div`
        display: flex;
        flex-direction: row;
        position: relative;
        font-size:18px;
        box-sizing:border-box;
        padding-left:70px;
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
export const PContainer= styled.div`
        position: absolute;
        display: ${props => props.visibility?'block':'none'};
        width: 400px;
        height: 150px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        margin: auto;
        background-color: ${props => props.theme.strongest};
        color: ${props => props.theme.text};
        text-align: center;
        box-sizing: border-box;

        label{
                margin: 10px;
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