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
        console.log(props.chapter)
        const [texts, setTexts] = useState([])
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
                <ChaptersContainer>
                <ChapterHeader> Chapter </ChapterHeader>
                {texts.map((item,key) => {
                        return (
                        <Card 
                                key = {key} 
                                onClick={()=>props.handleChapter(key)}>

                            <CardTitle>{item.title} 

                            <Remove onClick={()=>{
                                setUpdate();    
                            }}></Remove>

                            </CardTitle>

                                <CardText>{item.text.slice(0,300)}</CardText>

                        </Card>
                        )
                })} 
                </ChaptersContainer>
        )
}
export default  Chapters 
