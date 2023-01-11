import {DButton, PContainer} from './globalStyles'

const Popup = (props) => {
    return(
        <PContainer visibility = {props.pop.visibility}>
            <div>{props.pop.title}</div>
            <label>{props.pop.label}</label><br/>
            <input type = "text"></input><br/>
            <DButton>{props.pop.button}</DButton>
            <DButton onClick = {
                ()=>props.setPop(false)
            }>Cancel</DButton>
        </PContainer>
    )
}
export default Popup