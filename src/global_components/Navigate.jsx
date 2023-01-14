import {NavMembrane, NavContainer, SNavSec, TNavSec, CNavSec} from './globalStyles'


const NavSec = (props) => {
    const colors = ['red','orange', 'green']
    console.log('------------------------>'+props.number)
    return(
        <CNavSec
        onClick = {()=>{
            props.setScreen(props.number)
        }}
        >
        

        <SNavSec colors = {colors} number = {props.number} screen={props.screen} color = {props.color}>
            <div>{props.content}</div></SNavSec>
        <TNavSec colors = {colors} number = {props.number} screen={props.screen} color = {props.color}/>
        </CNavSec>
    )
}

const dummyData = ['Alchemy', 'The Elements']

const Navigate = (props) => {
    const screens = ['Contents', 'Chapters','Page'];

    const printScreens = (screen) => {
        let returnMe = []

        let pointer = 0;

        while(pointer <= screen){
            returnMe.push(<NavSec 
                            setScreen = {props.setScreen}
                            content = {screens[pointer]} 
                            number={pointer} 
                            key = {pointer} 
                            screen = {props.screen}/>)
            pointer++;
        }

        return(returnMe)
    }

    return (
        <NavMembrane>
        <NavContainer>
        {printScreens(props.screen)}
        </NavContainer>
        </NavMembrane>
    )
}

        // {dummyData.map((content, key)=>{

        //     <NavSec content = {content} key = {key}/>
        // })}
export default Navigate
