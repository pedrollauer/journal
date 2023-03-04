import endpoint from '../db'
import {Fragment, useState, useEffect} from 'react'
import {DButton, PContainer, MovePop, PopTitle} from './globalStyles'
import Select from 'react-select'

    const NewChapter = (props) => {
        return (
        <PContainer visibility = {props.received.pop.visibility}>
            <div>{props.received.pop.title}</div>
            <label>{props.received.pop.label}</label><br/>
            <input type = "text"></input><br/>
            <DButton>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </PContainer>
)
    }

    const DeleteNote = (props) => {
        return (
        <PContainer visibility = {props.received.pop.visibility}>
            <div>{props.received.pop.title}</div>
            <label>{props.received.pop.label}</label><br/>
            <input type = "text"></input><br/>
            <DButton>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </PContainer>
)
    }

    const NewNoteBook = (props) => {
        const [newNote, setNewnote] = useState(false)
        const [name, setName] = useState()

        console.log(props.received)
        useEffect(()=>{         
        const renameRemote = async () =>{

            if(newNote == false){
                return
            }
        console.log(props.received.pop.target)
        const raw = await fetch(endpoint+'/journal',{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
            body:JSON.stringify({command: 7, name: name})
        })

            props.received.setPop(false)
            setNewnote(false)

    }

            renameRemote()
        },[newNote])

        return (
        <PContainer visibility = {props.received.pop.visibility}>
            <div>{props.received.pop.title}</div>
            <label>{props.received.pop.label}</label><br/>
            <input onChange = {(e)=>{
                console.log(e)
                setName(e.target.value)
            }} value = {name} type = "text"></input><br/> 
            <DButton onClick = {
                () => {
                    console.log("Hlooo")
                    setNewnote(true)
                }
            }>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </PContainer>
)
    }

    const MoveChapter = (props) => {
        const [send, setSend] = useState(0)
        const [destination, setDestination] = useState(0)
        const [data, setData] = useState([])
        const [selectedOption, setSelectedOption] = useState({ value: '', label: '' });

        console.log(props.received)
        useEffect(()=>{         
        const moveData = async () =>{

        console.log(props.received.pop.target)
        console.log(selectedOption)
        console.log(props.received.pop.target.note_id)
        const raw = await fetch(endpoint+'/journal',{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
            body:JSON.stringify({command: 10, destination: selectedOption.value, chapt_id:props.received.pop.target})
        })

            props.received.setPop(false)
            setSend(-1)

    }
        const getData = async () =>{

        const raw = await fetch(endpoint+'/journal',{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
            body:JSON.stringify({command: 0})
        })

            const newData = await raw.json()

            const options = []
            newData.map((item)=>{
                options.push({value: item.id, label: item.name})
            })
            console.log(options)
            setData(options)
    }

            switch(send){
                case -1:
                    break
                case 0:
                    getData()
                    break
                case 1:
                    moveData()
                    break
            }
        },[send])



        return (
        <MovePop visibility = {props.received.pop.visibility}>
            <PopTitle>{props.received.pop.title}</PopTitle>
            <label>{props.received.pop.label}</label><br/>

            <Select 
            options = {data}
            onChange = {(selected) => {
                setSelectedOption(selected)
            }}
            value = {selectedOption}/><br/> 

            <DButton onClick = {
                () => {
                    setSend(1)
                }
            }>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </MovePop>
)
    }
    const Rename = (props) => {
        const [rename, setRename] = useState(false)
        const [name, setName] = useState(props.received.pop.target.name)

        console.log(props.received)
        useEffect(()=>{         
        const renameRemote = async () =>{

            if(rename == false){
                return
            }
        console.log(props.received.pop.target)
        const raw = await fetch(endpoint+'/journal',{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
            body:JSON.stringify({command: 6, name: name, note_id:props.received.pop.target.note_id})
        })

            props.received.setPop(false)
            setRename(false)

    }

            renameRemote()
        },[rename])

        return (
        <PContainer visibility = {props.received.pop.visibility}>
            <div>{props.received.pop.title}</div>
            <label>{props.received.pop.label}</label><br/>
            <input onChange = {(e)=>{
                console.log(e)
                setName(e.target.value)
            }} value = {name} type = "text"></input><br/> 
            <DButton onClick = {
                () => {
                    setRename(true)
                }
            }>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </PContainer>
)
    }

    const DeleteChapter = (props) => {
        const [del, setDel] = useState(false)

        useEffect(()=>{         
        const deleteData = async () =>{

            if(del == false){
                return
            }

        const raw = await fetch(endpoint+'/journal',{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
                body:JSON.stringify({command: 9,chapt_id:props.received.pop.target})
        })

            props.received.setPop(false)
            setDel(false)

    }

            deleteData()
        },[del])

        return (
        <PContainer visibility = {props.received.pop.visibility}>
            <div>{props.received.pop.title}</div>
            <label>{props.received.pop.label}</label><br/>
            <DButton onClick = {
                () => {
                    setDel(true)
                }
            }>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </PContainer>
)
    }

    const Delete = (props) => {
        const [del, setDel] = useState(false)

        useEffect(()=>{         
        const deleteData = async () =>{

            if(del == false){
                return
            }

        const raw = await fetch(endpoint + '/journal',{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
                body:JSON.stringify({command: 5,note_id:props.received.pop.target})
        })

            props.received.setPop(false)
            setDel(false)

    }

            deleteData()
        },[del])

        return (
        <PContainer visibility = {props.received.pop.visibility}>
            <div>{props.received.pop.title}</div>
            <label>{props.received.pop.label}</label><br/>
            <DButton onClick = {
                () => {
                    setDel(true)
                }
            }>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </PContainer>
)
    }

const applyStyle = (props) => {
 
            const param = props.pop.style ==null?-1:props.pop.style

            switch(param){
                case 0:
                    return <Delete received = {props}/>
                    break;
                case 1:
                    return <NewNoteBook received = {props}/>
                    break;
                case 2:
                    return <Rename received = {props}/>
                    break;
                case 3:
                    return <MoveChapter received = {props}/>
                    break;
                case 4:
                    return <DeleteChapter received = {props}/>
                    break;
                default:
                    return <NewChapter received = {props}/>
                    break;
            }
}

const Popup = (props) => {

    return <Fragment>
        {
            applyStyle(props)
        }
           </Fragment>
    
}
export default Popup
