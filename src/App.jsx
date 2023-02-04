import { useState, useEffect} from 'react'
import Page from './panels/Page'
import Notebooks from './panels/Notebooks'
import Chapters from './panels/Chapters'
import {Container, GlobalStyle} from './styles/Global.jsx'
import {ThemeProvider} from 'styled-components'
import {dummyNotebook,dummyChapters} from './dummyData.jsx'
import {defaultCMenu} from './global_components/globalVariables'
import theme from './styles/themes.jsx'
import Right from './panels/Right.jsx'
import Header from './panels/Header'
import Popup from './global_components/Popup'
import Navigate from './global_components/Navigate'

function App() {

        const [screen, setScreen] = useState(0)
        const [chapter,setChapter] = useState(0)
        const [page,setPage] = useState(0)
        const [notebook, setNotebook] = useState(0)

        const [notebooks,setNotebooks] = useState([{name:''}])

        const [texts,setTexts] = useState(0)
        const [more, setMore] = useState(false)
        const [data,setData]  = useState([{name: "Rhetoric"},{name: "Logic"}, {name: "Grammar"}])
        const [refresh, setRefresh] = useState(true)

        const [contMenu, setContMenu] = useState(false)
        const [position, setPosition] = useState({x:50, y:500})
        const [cMenuOptions, setCMenuOptions] = useState([{option:'Opcao 1', command:0}, {option:'Opcao 3', command:0}, {option:'Opcao 2', command:0}])
        const [pop, setPop] = useState({visibility: false, title: '---' ,name: '--', button: 'OK', })

        const changeScreen = (screenCode) => {
           setScreen(screenCode)
        }

        const changeText = (text) => {
            console.log(text)
            setTexts(text)
            setScreen(2)
        }

        const togglePop = (state) => {
                setPop(state)
        }

        const showContextMenu = (options) => {
                setContMenu(true)
                setCMenuOptions(options)
        }

        const toggleContextMenu = (event)=>{
                console.log(event)
                setPosition({x:event.clientX, y:event.clientY})
        }

        const hideContextMenu = (event) =>{
                setContMenu(false);
        }
        useEffect(()=>{
                window.addEventListener("contextmenu", toggleContextMenu)
                window.addEventListener("click", hideContextMenu)
                return () => {
                        window.removeEventListener("contextmenu", toggleContextMenu)
                        window.removeEventListener("click", hideContextMenu)
                }
        },[data])

        // useEffect(()=>{


        //         const fetchNotebooks = async()=>{
        //                 const raw = await fetch('http://191.252.186.178/journal',{
        //                         method:'POST',
        //                         headers:{
        //                                 'Content-Type':'application/json'
        //                         },
        //                         body:JSON.stringify({comando:0})
        //                 })

        //                 const result = await raw.json();

                       

        //         if(refresh==true){
        //                 setNotebooks(result)
        //                 setRefresh(false)
        //         }

        //         }
        
        //         // const fetchMore = async () =>{
        //         //         if(more==true){
                        
        //         //         const raw = await fetch('http://191.252.186.178/journal',{
        //         //                 method:'POST',
        //         //                 headers:{
        //         //                         'Content-Type':'application/json'
        //         //                 },
        //         //                 body:JSON.stringify({comando:2,notebook_id:page})
        //         //         })

        //         //         const data = await raw.json();
                                
        //         //                 setMore(false)
        //         //                 setTexts(data)
        //         //         }
        //         // }
        //                 const update = async()=>{
        //                 const raw = await fetch('http://191.252.186.178/journal',{
        //                                 method:'POST',
        //                                 headers:{
        //                                         'Content-Type':'application/json'
        //                                 },
        //                                 body:JSON.stringify(data)
        //                         })

        //                         const result = await raw.json();
        //                         console.log(result)

                               


        //                 }

        //         if(Object.keys(data)!=0) {
                
        //                 update()

        //         }

        //                 //fetchMore()
        //                 fetchNotebooks()

        // },[page,data])

    console.log('Screen ' + screen)
          const handleChange = ()=>{
                  const n = refresh == true?false:true
                  setRefresh(n)
          }
  return (

    <div className="App">
          <Header/>
          <Container
          onContextMenu = {(e) => {
                        e.preventDefault()
                        
                        }}>

          <ThemeProvider 
                theme={theme.dark}>

          <GlobalStyle/>
          <Right                
                                setPop = {togglePop}
                                pop = {pop}
                                options = {cMenuOptions} 
                                toggle ={toggleContextMenu} 
                                visibility = {contMenu}
                                position={position}/>
          <Popup pop = {pop} setPop = {togglePop} />
          <Navigate 
      setScreen = {(s)=>{
        setScreen(s)
      }}
            screen = {screen}/>
          <Notebooks 
          screen = {screen}
          changeScreen = {changeScreen}
          notebook = {notebook}
          selectNotebook = {(id)=>{
              console.log('Current Notebook: '+id)
              setNotebook(id)
          }}
          setPop = {togglePop}
          pop = {pop}
          cMenu = {showContextMenu}

          handleChange = {()=>{
                  const n = refresh == true?false:true
                  setRefresh(n)
          }}
                data = {notebooks}/>


          <Chapters  
                notebook = {notebook}
                screen = {screen}
                changeScreen = {changeScreen}
                cMenu = {showContextMenu}
                chapter = {page}
                changeText = {changeText}
                pop = {pop}
                handleChapter={
                        (newChapter)=>{
                                setChapter(newChapter) 
                        }} 
                data = {refresh}/>

          <Page 
          refresh = {handleChange}
          screen = {screen}
          changeScreen = {changeScreen}
          cMenu = {showContextMenu}
          currText = {texts}
          handleChange = {(newData)=>{
                  //setData(newData)
                  setMore(true)
          }}
      />

          </ThemeProvider>

          </Container>
    </div>

  )
}

export default App
