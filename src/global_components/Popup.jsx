import {Fragment} from 'react'
import {DButton, PContainer} from './globalStyles'

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

    const Delete = (props) => {
        console.log("*************DELETE****************")
        console.log(props)
        return (
        <PContainer visibility = {props.received.pop.visibility}>
            <div>{props.received.pop.title}</div>
            <label>{props.received.pop.label}</label><br/>
            <DButton>{props.received.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.received.setPop(false)
            }>Cancel</DButton>
        </PContainer>
)
    }

const applyStyle = (props) => {
 
            const param = props.pop.style ==null?-1:props.pop.style
        console.log(props.pop.style)
        console.log(param)
            switch(param){
                case 0:
                    return <Delete received = {props}/>
                    break;
                case 1:
                    return <Delete received = {props}/>
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
