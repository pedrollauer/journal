import styled from 'styled-components'

export const NotebooksContainer= styled.div`
        height:100%;
        background-color:${props => props.theme.strong};
        color:${props => props.theme.text}
`
export const Title = styled.div`
        padding-top:30px;
        font-size:50px;        
        text-align:center;
        color:white;
`

export const Section = styled.div`
        box-sizing:border-box;
        padding:20px 10px;
        
`
export const SectionTitle = styled.span`
        font-size:24px;
        margin-left:5px;
        
`
export const RightButton = styled.button`
        float:right;
        width:60px;
        height:${props => props.size};
        margin:0px;
        padding:0px;
        outline-color:white;
        outline-style:solid;
        outline-width:1px;
        border:none;
        background-color:${props => props.theme.strong};
        color: ${props => props.theme.text};
        visibility:hidden;
        

`
export const SectionItem= styled.div`
        font-size:18px;
        box-sizing:border-box;
        padding-left:70px;
        padding-top:10px;
        padding-bottom:10px;

        &:hover{
                background-color:${props => props.theme.strongest};
                cursor:pointer;
        }

        &:hover ${RightButton}{
        visibility:visible;
        }
        
`
export const SectionContainer= styled.div` 
        height:30px;
        &:hover ${RightButton}{
        visibility:visible;
        }
        
`
