import endpoint from '../db'
import {EditorContainer,EditorHeader,TextArea,Save} from './PageStyles.jsx'
import {useState,useEffect} from 'react'

const Page = (props) => {


 const update = async (chapter) =>{

    const request = {command:4 ,chapt_id: chapter, text: text.text, title: text.title} 
     console.log(request)
    const raw = await fetch(endpoint+'/journal',{
            method:'POST',
            headers:{
                    'Content-Type':'application/json'
            },
        body:JSON.stringify(request)
    })

    const data = await raw.json();

    return data
        
}

const fetchText = async (chapter) =>{

    const raw = await fetch(endpoint+'journal',{
            method:'POST',
            headers:{
                    'Content-Type':'application/json'
            },
            body:JSON.stringify({command:2,chapt_id: chapter})
    })

    const data = await raw.json();

    return data
        
}

        const [text,setText] = useState(-1)

        useEffect(()=>{

            const a = async() =>{

                const text = await fetchText(props.currText)
                
               setText(text)
            }

            a()
        },[props.currText]) 

        useEffect(()=>{

            const a = async() =>{

                console.log(text)
                console.log(props.title)
                if(text != -1 ){
                 await update(props.currText)
                 props.setTitle(props.title+1)
                }
            }

            a()
        },[text]) 
        return(
                <EditorContainer
                screen = {props.screen}>
                <EditorHeader>
                </EditorHeader> 

                <TextArea 
                        onContextMenu = {() => {
                                props.cMenu([{option:'Copy', command:0}, {option:'Paste', command:1}, {option:'Cut', command:3}])
                        }}

                        value={text.text}
                        onChange = {(cEvent) => {
                               const newText = cEvent.target.value

                                const index = text.text.indexOf('\n')
                                let title = ""
                                if(index !=-1){
                                    title = newText.substring(0,index)
                                    console.log(title)
                                }else{
                                    title = newText
                                }

                               const newState = {text:cEvent.target.value, title: title}
                               setText(newState) 
                }}
                />
                
                </EditorContainer>
        )
}
export default  Page
