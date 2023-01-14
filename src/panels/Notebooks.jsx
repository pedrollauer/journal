import { NotebooksContainer, Section,SectionTitle,} from './NotebooksStyles.jsx'
import {TbNotebook} from 'react-icons/tb'
import {AiFillTag,AiFillPushpin, AiOutlineDown} from 'react-icons/ai'
import {MdOutlineAdd} from 'react-icons/md'
import Colapsable from '../global_components/Colapsable'
import {Add, SectionItem, SectionContainer} from '../global_components/globalStyles'
import {useState, useEffect, Fragment} from 'react'


const dummyData = [{name: "Rhetoric"},{name: "Logic"}, {name: "Grammar"}];
const update = async(data, refreshMe)=>{
const raw = await fetch('http://191.252.186.178/journal',{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
        })

        const result = await raw.json();

        console.log(result) 
        refreshMe()
        

}


const Notebooks= (props) => {

        const [data, setData] = useState({})




        console.log(props.data)
        return(
                <NotebooksContainer >

                <Colapsable setPop = {props.setPop} name = {Notebooks}>
                <Section>

                {
                        dummyData.map((item,key)=>{
                        return (
                       
                                <SectionItem
                            
                                selected = {key == props.notebook?true:false}
                                onContextMenu = {() => {
                                        console.log('Adone!')
                                        props.cMenu([{option:'Deletar Caderno', command:0}, {option:'Criar Novo Caderno', command:1}, {option:'Renomear Caderno', command:2}])
                                }}

                                onClick ={ (e)=>{
                                        
                                        console.log(e)
                                        props.chooseChapter(item.notebook_id)
                                }}
                                        key={key}>
                                       <td> {item.name}</td>

                                <Add key = {key} size={'18px'} 
                                        
                                onClick={()=>{
                                        setData({
                                                comando:3,
                                                notebook_id:item.notebook_id
                                        })
                                        console.log(item.notebook_id)
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
