import {SectionContainer, NotebooksContainer,Title,Section,SectionTitle,SectionItem,RightButton} from './NotebooksStyles.jsx'
import {TbNotebook} from 'react-icons/tb'
import {AiFillTag,AiFillPushpin} from 'react-icons/ai'
import {useState, useEffect, Fragment} from 'react'


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
        refreshMe(result)
        

}

const Add = (props) =>{        

                return <RightButton onClick={props.onClick} size={props.size}>ADD</RightButton>
}

const Notebooks= (props) => {

        const [data, setData] = useState({})
        useEffect(()=>{
                update(data, props.handleChange)
        },[data])

        console.log(props.data)
        return(
                <NotebooksContainer>
                        <Title>
                                JOURNAL
                        </Title>
                <hr/>

                <Section>
                <div>

                <SectionContainer>
                <TbNotebook/>
                <SectionTitle>
                        Notebooks 
                </SectionTitle>
                <Add size={'100%'}/>
                </SectionContainer>

                {
                        props.data.map((item,key)=>{
                        return (
                       
                                <Fragment key = {key}>
                                <SectionItem 
                                onClick ={ ()=>{

                                        props.chooseChapter(item.notebook_id)
                                }}
                                        key={key}>
                                        {item.name}

                                <Add key = {key} size={'18px'} 
                                        
                                onClick={()=>{
                                        setData({
                                                comando:3,
                                                notebook_id:item.notebook_id
                                        })
                                        console.log(item.notebook_id)
                                }}/>

                                </SectionItem>
                                </Fragment>
                        )
                })

                }

                </div>
                </Section>

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
