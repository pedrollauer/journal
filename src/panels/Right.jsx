import {Fragment, useState, useEffect} from 'react'
import { ContexMenu, Button} from './RightStyles'

const dummyOptions = ['Option 1', 'Option 2','Option 3']

const runCommand = (command, props) => {
    switch(command){
        case 0:
            console.log('Delete Notebook')
            props.setPop({visibility: true, title: 'Delete Notebook', button: 'Delete', name: 'Delete Notebook', label: 'Type the name of the notebook that you want to delete to confirm.'})
            break;
        case 1:
            console.log('Create Notebook')
            props.setPop({visibility: true, title: 'Create Notebook', button: 'Create', name: 'New Notebook', label: 'Enter the name for the new notebook.'})
            break;
        case 2:
            props.setPop({visibility: true, title: 'Rename Notebook', button: 'Rename', name: 'New Name', label: 'Enter the new name'})
            console.log('Rename Notebook')
            break;
        case 3:
            props.setPop({visibility: true, title: 'Move Notebook', button: 'Move', name: 'Destination', label: 'Pick the destination'})
            console.log('Move Notebook')
            break;
        default: 
            console.log('Unknown command.');
    }
}

const Right = (props) =>{
    
    return <Fragment>
        <ContexMenu 
            visibility = {props.visibility}
            position = {props.position} >
        {props.options.map((item, key) => {
            return(<Button key={key} 
                    onClick={() => {
                       runCommand(item.command, props) 
                    }}>
                    {item.option}
                    </Button>)
        })}
        </ContexMenu>
    </Fragment>
}
export default Right