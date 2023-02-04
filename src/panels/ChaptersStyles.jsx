import styled from 'styled-components'

export const ChaptersContainer = styled.div`
        height:100%;
        background-color:${props => props.theme.nstrong};
        color:${props => props.theme.text};
        z-index:2;
        overflow-y: scroll;
        
        @media screen and (max-width: 700px){
            width:700px;
            height: 100vh; 
            transform: ${props => props.screen==1?'translateY(-100vh)':'translateY(0px)'};
        }
`

export const ChapterHeader = styled.div`
        box-sizing: border-box;
        text-align:center;
        padding: 20px 0px 20px 0px;
        font-size:30px;
        height:100px; 

       @media screen and (max-width: 700px){ 
        padding-top: 20px;
        width: 100vw;       
       }
`
export const Card = styled.div`
        box-sizing: border-box;
        cursor:pointer;
        padding: 20px 10px 20px 10px;

&:hover {
        background-color: ${props => props.theme.strongest};
}

`
export const CardTitle = styled.div`
        box-sizing: border-box;
        font-size:24px;
        font-weight:bold;
        padding: 10px 0px 10px 10px;


`

export const CardText = styled.div`
        box-sizing: border-box;
        text-align: justify;
        padding: 0px 20px 0 20px;

`

