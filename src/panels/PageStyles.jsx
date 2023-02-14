import styled from 'styled-components'

export const EditorContainer = styled.div`
        height:100%;
        background-color:${props => props.theme.strong};
        overflow:hidden;
        z-index: 3

        transform: translateY(-200px);
        @media screen and (max-width: 700px){
            width:700px;
            height: 100vh;
            transform: ${props => props.screen==2?'translateY(-200vh)':'translateY(0px)'};
`

export const EditorHeader = styled.div`
        margin: 50px 0px 50px 0px;
        text-align:center; 
        color:${props => props.theme.text};

       @media screen and (max-width: 700px){
        padding: 0px;
        width: 100vw;       
       }
`

export const TextArea= styled.textarea`
       background-color:${props => props.theme.strong};
       box-sizing:border-box;
       width:100%;
       height:100%;
       margin:auto;
       color:${props => props.theme.text};
       outline:none !important;
       border:none;
       resize:none;
       padding:30px 30px 0px 30px;
       text-align:justify;

       @media screen and (max-width: 700px){
        padding: 0px;
        width: 100vw;
        padding: 0px 20px 0px 20px; 
       }
       
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
