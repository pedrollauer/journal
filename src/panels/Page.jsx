import {EditorContainer,EditorHeader,TextArea,Save} from './PageStyles.jsx'
import {useState,useEffect} from 'react'

const dummyData = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem justo, gravida consequat bibendum vitae, finibus nec felis. Nam congue, leo a viverra placerat, nunc mauris venenatis nulla, quis condimentum mauris enim sit amet lorem. Nulla urna erat, volutpat sit amet nisi lobortis, sodales rutrum justo. Nulla iaculis laoreet ex a imperdiet. Phasellus in metus in ipsum accumsan tincidunt non lobortis ante. Nam vehicula molestie arcu quis convallis. Donec risus erat, laoreet in enim eget, interdum elementum eros. Vivamus fermentum porttitor massa. Quisque purus lorem, aliquet sed metus eu, tincidunt suscipit nunc. Vivamus tristique rhoncus viverra. Proin sem libero, aliquam in arcu eget, gravida accumsan nisl.

Integer malesuada tincidunt nunc quis laoreet. Curabitur hendrerit est et eros hendrerit, in consequat augue hendrerit. Suspendisse ac quam vel libero porttitor finibus ultrices ut erat. Nulla lacinia nec risus at blandit. Praesent fringilla ac lectus vitae ullamcorper. Nullam lacinia, leo ut consequat vehicula, metus libero hendrerit augue, id fringilla ligula augue ut sapien. Aenean at dui tincidunt turpis vehicula maximus vitae vitae erat. Suspendisse ac finibus libero, a posuere ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean id neque id mauris euismod facilisis. In ultrices purus a maximus ornare. Suspendisse ultricies auctor dolor, vel volutpat tellus. Pellentesque venenatis dolor sed mi rutrum gravida. Vestibulum pulvinar, mauris id faucibus bibendum, leo magna hendrerit ipsum, eu aliquam sem lacus non leo.

In vulputate, erat sed rhoncus ornare, odio lorem dictum tortor, vulputate pellentesque ligula ligula ut lacus. Nullam rutrum ullamcorper quam id feugiat. Sed sed felis a felis varius vulputate. Praesent quis vehicula ipsum. Mauris gravida ante eget leo pulvinar, vitae gravida enim feugiat. Proin urna nisl, consequat vel nisi vitae, dictum egestas odio. Proin posuere arcu sed ante bibendum, eget porttitor nisi sagittis. Vestibulum iaculis gravida mauris nec pellentesque. Proin nulla ligula, bibendum a posuere in, finibus ut tortor.

Pellentesque fringilla sapien nec eros iaculis, ac scelerisque nibh malesuada. Nam feugiat sollicitudin augue, vitae efficitur nisl malesuada vitae. Proin eu cursus orci. Aliquam et mi quis enim commodo eleifend. Proin vel nibh at mauris iaculis vestibulum eu sed magna. Sed et sem ac ipsum lobortis lacinia in a sem. Ut vitae lorem at dolor vestibulum fermentum eu quis libero. Phasellus scelerisque ultrices facilisis. In suscipit dignissim ultrices. Ut sapien risus, iaculis ac consequat ut, commodo eu nunc.

Sed placerat efficitur eleifend. Suspendisse mattis, justo ut tempor ultricies, justo libero laoreet lacus, ut tincidunt nulla lacus sit amet enim. Sed elit est, posuere quis mi in, fermentum venenatis nulla. Vestibulum volutpat nisi lacus, tempus aliquam ante maximus nec. Fusce tristique felis lacus, nec molestie eros hendrerit et. Nulla faucibus commodo velit, a imperdiet nulla maximus sed. Morbi imperdiet pharetra felis a posuere. Mauris at elit libero. Curabitur eu enim ultricies, accumsan nulla sit amet, iaculis metus. Nullam feugiat diam dui, at tempus erat porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec varius venenatis consectetur. Praesent quis tempus dolor, at congue magna. Pellentesque vitae ex vitae lorem commodo sollicitudin. Pellentesque dolor sem, ullamcorper nec ipsum in, interdum elementum risus. Duis eget suscipit nunc.`

const dummyTitle = 'Titulum'
const Page = (props) => {
        const [text,setText] = useState(dummyData)
        useEffect(()=>{
               // setText(props.data.text)
        },[props.data.text]) 

        return(
                <EditorContainer
                screen = {props.screen}>
                <EditorHeader>
                <br/>{dummyTitle}<br/>
                </EditorHeader> 

                <TextArea 
                        onContextMenu = {() => {
                                props.cMenu([{option:'Copy', command:0}, {option:'Paste', command:1}, {option:'Cut', command:3}])
                        }}

                        value={text}
                        onChange = {(cEvent) => {
                               setText(cEvent.target.value) 
                }}
                />
                
                </EditorContainer>
        )
}
export default  Page
