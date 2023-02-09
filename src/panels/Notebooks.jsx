import { NotebooksContainer, Section,SectionTitle,} from './NotebooksStyles.jsx'
import {TbNotebook} from 'react-icons/tb'
import {AiFillTag,AiFillPushpin, AiOutlineDown} from 'react-icons/ai'
import {MdOutlineAdd} from 'react-icons/md'
import Colapsable from '../global_components/Colapsable'
import {Add, SectionItem, SectionContainer} from '../global_components/globalStyles'
import {useState, useEffect, Fragment} from 'react'


const dummyData = [{name: "Rhetoric"},{name: "Logic"}, {name: "Grammar"}];




const Notebooks= (props) => {

        const [data, setData] = useState([{name:''}])
        const [add, setAdd] = useState(-1)

        useEffect(()=>{

        const getData = async() => {

        const raw = await fetch('http://localhost:3000/journal',{
                        method:'POST',
                        headers:{
                                'Content-Type':'application/json'
                        },
                        body:JSON.stringify({command: 0})
                })

                const result = await raw.json();
                console.log(result)
                setData(result)

        }
        getData()
        },[props.pop])

        useEffect(()=>{

        const getData = async() => {

            if(props.add==-1){
                return
            }

        const raw = await fetch('http://localhost:3000/journal',{
                        method:'POST',
                        headers:{
                                'Content-Type':'application/json'
                        },
            body:JSON.stringify({command: 8, note_id: props.add})
                })

                const result = await raw.json();
                console.log(result)
                props.selectNotebook(props.add)
                props.setAdd(-1)
                

        }
        getData()
        },[props.add, props.pop])
    
        return(
                <NotebooksContainer >

                <Colapsable setPop = {props.setPop} name = {Notebooks}>
                <Section>

                {
                        data.map((item,key)=>{
                        return (
                       
                                <SectionItem
                            
                                selected = {item.id == props.notebook?true:false}
                                onContextMenu = {() => {
                                        props.cMenu([{option:'Delete Notebeook', command:0, target: item.id}, {option:'New Notebook', command:1, target:{name:item.name, note_id: item.id}}, {option:'Rename Notebook', command:2, target:{name:item.name, note_id: item.id}}])
                                }}

                                onClick ={ (e)=>{
                                        
                                    props.selectNotebook(item.id)
                                }}
                                        key={key}>
                                       <td> {item.name}</td>

                                <Add key = {key} size={'18px'} 
                                        
                                onClick={()=>{ 
                                    props.setAdd(item.id)
                                }}/>

                                </SectionItem>
                        )
                })

                }

                </Section>

                </Colapsable>
                <Section>
                <AiFillPushpin/><SectionTitle>Status</SectionTitle>
                </Section> 

                <Section>
                <AiFillTag/><SectionTitle>Status</SectionTitle>
                </Section>

                </NotebooksContainer>
        )
}
export default Notebooks
