import endpoint from '../db.js'
import {ChaptersContainer,Card,CardTitle,CardText,ChapterHeader} from './ChaptersStyles.jsx'
import {useCallback, useEffect, useState} from 'react'

const Remove = (props)=>{
    return(
        <button>del</button>
    )
}



const Chapters= (props) => {

        console.log('Current Notebook: '+props.notebook)
        const [texts, setTexts] = useState([{title:"Alchemy", text:"This is the study of change."}, {title: "Logic", text: "This is the study of change"}])
        const [update, setUpdate] = useState(true)

const fetchTexts= async () =>{

    const raw = await fetch(endpoint+'/journal',{
            method:'POST',
            headers:{
                    'Content-Type':'application/json'
            },
            body:JSON.stringify({command:1,note_id:props.notebook})
    })

    const data = await raw.json();

    console.log(data)
    return data        
}

    const deleteChapter = useCallback(()=>{

        const a = async ()=>{

            const texts = await fetchTexts(props.chapter)
            
            setTexts(texts)
        }

        a()
    },[props.notebook])

    useEffect(()=>{

        const a = async ()=>{
            const texts = await fetchTexts()
            setTexts(texts)
        }

        a()

    },[update, props.chapter, props.notebook, props.title, props.add, props.refresh, props.pop])

        return(
                <ChaptersContainer screen = {props.screen}>
                <ChapterHeader> Chapter </ChapterHeader>
                {texts.map((item,key) => {
                        return (
                        <Card 
                                key = {key} 
                                onClick = {()=>props.changeText(item.id)}
                                onContextMenu={()=>{
                                    //props.handleChapter(key)
                                    console.log('Pop');
                                    props.cMenu([{option:'Delete Chapter', command:4, style: 1, target: item.id}, {option:'Move Chapter', command:3, style: 2, target: item.id}])
                                    
                                    }}>

                            <CardTitle>{item.title!=null?item.title:""} 


                            </CardTitle>

                                <CardText>{item.description}</CardText>

                        </Card>
                        )
                })} 
            <Card></Card>
                </ChaptersContainer>
        )
}
export default  Chapters 
