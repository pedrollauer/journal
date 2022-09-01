import {ChaptersContainer,Card,CardTitle,CardText,ChapterHeader} from './ChaptersStyles.jsx'

const Chapters= (props) => {
        console.log(props.data)
        return(
                <ChaptersContainer>
                <ChapterHeader> Pages </ChapterHeader>
                {props.data.map((item,key) => {
                        return (
                        <Card 
                                key = {key} 
                                onClick={()=>props.handleChapter(key)}>

                                <CardTitle>{item.title}</CardTitle>

                                <CardText>{item.text.slice(0,300)}</CardText>

                        </Card>
                        )
                })} 
                </ChaptersContainer>
        )
}
export default  Chapters 
