import {Fragment, useState, useEffect} from 'react'
import { ContexMenu, Button} from './RightStyles'

const dummyOptions = ['Option 1', 'Option 2','Option 3']

const runCommand = (command, props, item) => {
    switch(command){
        case 0:
            console.log('Delete Notebook')
            props.setPop({command: command, visibility: true, title: 'Delete Notebook', button: 'Delete', name: 'Delete Notebook', label: "Are you sure you want to delete this notebook and all it's chapters?", style: 0, target: item.target})
            break;
        case 1:
            console.log('Create Notebook')
            props.setPop({visibility: true, title: 'Create Notebook', button: 'Create', name: 'New Notebook', label: 'Enter the name for the new notebook.', style: 1, target: item.target})
            break;
        case 2:
            props.setPop({visibility: true, title: 'Rename Notebook', button: 'Rename', name: 'New Name', label: 'Enter the new name', style: 2, target: item.target})
            console.log('Rename Notebook')
            break;
        case 3:
            props.setPop({visibility: true, title: 'Move Notebook', button: 'Move', name: 'Destination', label: 'Pick the destination', style: 3, target: item.target})
            console.log('Move Notebook')
            break;
        case 4:
            console.log('Delete Chapter')
            console.log(command)
            props.setPop({command: command, visibility: true, title: 'Delete Chapter', button: 'Delete', name: 'Delete Chapter', label: 'Are you sure you want to delete this chapter?', style: 4, target: item.target})
            break;
        case 5:
            console.log('New Chapter')
            props.setPop({command: command, visibility: true, title: 'Delete Chapter', button: 'Delete', name: 'Delete Chapter', label: 'Are you sure you want to delete this chapter?', style: 0, target: item.target})
            break;
        default: 
            console.log('Unknown command.');
    }
}


const Right = (props) =>{
    
    return  <Fragment>
    <ContexMenu 
        visibility = {props.visibility}
        position = {props.position} >
    {props.options.map((item, key) => {
        return(<Button key={key} 
                onClick={() => {
                   runCommand(item.command, props, item) 
                }}>
                {item.option}
                </Button>)
    })}
    </ContexMenu>
</Fragment>
}

export default Right
