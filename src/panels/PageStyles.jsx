import styled from 'styled-components'

export const EditorContainer = styled.div`
        height:100%;
        background-color:${props => props.theme.strong};
        overflow-x:hidden;
`

export const EditorHeader = styled.div`
        margin: 50px 0px 50px 0px;
        text-align:center; 
        color:${props => props.theme.text}
`

export const TextArea= styled.textarea`
       background-color:${props => props.theme.strong};
       box-sizing:border-box;
       width:100%;
       height:100%;
       margin:0 auto;
       color:${props => props.theme.text};
       outline:none !important;
       border:none;
       resize:none;
       padding:0px 30px 0px 30px;
       text-align:justify;
`
export const Save = styled.button`
        margin: 10px 0px 10px 0px;
        background-color:${props => props.theme.strong};
        outline:solid;
        outline-color:${props => props.theme.text};
        outline-width:1px;
        color:${props => props.theme.text};
        box-shadow:none;
        border:none;
        padding:10px 50px 10px 50px;
        
`
