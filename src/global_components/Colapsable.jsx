import { Fragment, useState } from "react"
import { ColapsableStyle, SectionTitle, Add} from "./globalStyles"
import {TbNotebook} from 'react-icons/tb'
import {AiOutlineRight, AiOutlineDown} from 'react-icons/ai'

const Colapsable = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    
    return(
        <Fragment>
        <SectionTitle>
                <button 
                onClick = {
                    () => {
                            console.log(collapsed)
                            setCollapsed(!collapsed)
                        }
                }>
                   {!collapsed?<AiOutlineDown/>:<AiOutlineRight/>} 
                </button> Notebooks 
        <Add 
            onClick = {
                ()=>{
            props.setPop({visibility: true, title: 'Create Notebook', button: 'Create', name: 'New Notebook', label: 'Enter the name for the new notebook.', style: 1})

                }
            }
            visibility={'fixed'} 
            size={'100%'}/>
        </SectionTitle>
        <ColapsableStyle collapsed = {collapsed}>
            {props.children}
        </ColapsableStyle>
        </Fragment>
    )
}
export default Colapsable
