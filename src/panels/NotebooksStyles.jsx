import styled from 'styled-components'

export const NotebooksContainer= styled.div`
        box-sizing: border-box;
        padding-top: 10px;
        height:100%;
        background-color:${props => props.theme.strong};
        color:${props => props.theme.text};
        resize: horizontal;

`

export const Section = styled.div`
        box-sizing:border-box;
        padding:20px 10px;
        
`
export const SectionTitle = styled.span`
        font-size:18px;
        margin-left:5px;
        
`

