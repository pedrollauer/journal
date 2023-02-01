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
        },[])

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
                                        props.cMenu([{option:'Deletar Caderno', command:0}, {option:'Criar Novo Caderno', command:1}, {option:'Renomear Caderno', command:2}])
                                }}

                                onClick ={ (e)=>{
                                        
                                    props.selectNotebook(item.id)
                                }}
                                        key={key}>
                                       <td> {item.name}</td>

                                <Add key = {key} size={'18px'} 
                                        
                                onClick={()=>{
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
