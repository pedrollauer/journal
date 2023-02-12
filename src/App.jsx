import { useState, useEffect} from 'react'
import Page from './panels/Page'
import Notebooks from './panels/Notebooks'
import Chapters from './panels/Chapters'
import {Container, GlobalStyle} from './styles/Global.jsx'
import {ThemeProvider} from 'styled-components'
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
        const [title, setTitle] = useState(0)

        const [add, setAdd] = useState(-1)
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
          add = {add}
      setAdd = {(value)=>{
          setAdd(value)
      }}
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
                  console.log("refreshing")
                  setRefresh(n)
          }}
                data = {notebooks}/>


          <Chapters  
                add = {add}
                notebook = {notebook}
                screen = {screen}
                changeScreen = {changeScreen}
                cMenu = {showContextMenu}
                chapter = {page}
                changeText = {changeText}
                pop = {pop}
                title = {title}
                handleChapter={
                        (newChapter)=>{
                                setChapter(newChapter) 
                        }} 
                data = {refresh}/>

          <Page 
          title = {title}
          setTitle = {(value)=>{
              setTitle(value)
          }}
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
