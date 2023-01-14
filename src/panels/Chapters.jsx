import {ChaptersContainer,Card,CardTitle,CardText,ChapterHeader} from './ChaptersStyles.jsx'
import {useCallback, useEffect, useState} from 'react'

const Remove = (props)=>{
    return(
        <button>del</button>
    )
}

const fetchTexts= async (chapter) =>{

const raw = await fetch('http://191.252.186.178/journal',{
        method:'POST',
        headers:{
                'Content-Type':'application/json'
        },
        body:JSON.stringify({comando:2,notebook_id:chapter})
})

    const data = await raw.json();

    console.log(chapter)
    return data
        
}


const Chapters= (props) => {
        console.log(props)
        const [texts, setTexts] = useState([{title:"Alchemy", text:"This is the study of change."}, {title: "Logic", text: "This is the study of change"}])
        const [update, setUpdate] = useState(true)

    const deleteChapter = useCallback(()=>{

        const a = async ()=>{

            const texts = await fetchTexts(props.chapter)
            console.log(texts)
            setTexts(texts)
        }

        a()
    },[])

    useEffect(()=>{

        const a = async ()=>{

            const texts = await fetchTexts(props.chapter)
            console.log(texts)
            setTexts(texts)
        }

        a()

    },[update, props.chapter, props.data])

        return(
                <ChaptersContainer
                screen = {props.screen}
                >
                <ChapterHeader> Chapter </ChapterHeader>
                {texts.map((item,key) => {
                        return (
                        <Card 
                                key = {key} 
                                onClick = {()=>props.changeScreen(2)}
                                onContextMenu={()=>{
                                    //props.handleChapter(key)
                                    console.log('Pop');
                                    props.cMenu([{option:'New Chapter', command:0}, {option:'Delete Chapter', command:1}, {option:'Move Chapter', command:3}])
                                    
                                    }}>

                            <CardTitle>{item.title} 


                            </CardTitle>

                                <CardText>{item.text.slice(0,300)}</CardText>

                        </Card>
                        )
                })} 
                </ChaptersContainer>
        )
}
export default  Chapters 
