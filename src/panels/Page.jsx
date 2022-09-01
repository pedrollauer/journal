import {EditorContainer,EditorHeader,TextArea,Save} from './PageStyles.jsx'
import {useState,useEffect} from 'react'

const Page = (props) => {
        const [text,setText] = useState(props.data.texto)
        useEffect(()=>{
                setText(props.data.text)
        },[props.data.text]) 

        return(
                <EditorContainer>
                <EditorHeader>
                <Save
                onClick={()=>{
                        console.log()
                        props.handleChange({
                                comando:4,
                                text_id:props.data.text_id,
                                text:text,
                                title:text.substring(0,text.search('\n'))
                        })
                }}>Save</Save>
                <br/>{props.data.titulo}<br/>
                </EditorHeader> 

                <TextArea 
                        value={text}
                        onChange = {(cEvent) => {
                               setText(cEvent.target.value) 
                }}
                />
                
                </EditorContainer>
        )
}
export default  Page
