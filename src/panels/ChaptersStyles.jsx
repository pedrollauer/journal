import styled from 'styled-components'

export const ChaptersContainer = styled.div`
        height:100%;
        background-color:${props => props.theme.nstrong};
        color:${props => props.theme.text}
`

export const ChapterHeader = styled.div`
        box-sizing: border-box;
        text-align:center;
        padding: 20px 0px 20px 0px;
        font-size:30px;
        height:100px; 
`
export const Card = styled.div`
        box-sizing: border-box;
        cursor:pointer;


`
export const CardTitle = styled.div`
        box-sizing: border-box;
        font-size:24px;
        font-weight:bold;
        padding: 20px 0px 10px 20px;


`

export const CardText = styled.div`
        box-sizing: border-box;
        text-align: justify;
        padding: 0px 20px 0 20px;

`

