import { useState, useEffect} from 'react'
import Page from './panels/Page'
import Notebooks from './panels/Notebooks'
import Chapters from './panels/Chapters'
import {Container, GlobalStyle} from './styles/Global.jsx'
import {ThemeProvider} from 'styled-components'
import {dummyNotebook,dummyChapters} from './dummyData.jsx'
import theme from './styles/themes.jsx'


function App() {

        const [chapter,setChapter] = useState(0)
        const [page,setPage] = useState(0)
        const [notebooks,setNotebooks] = useState([{name:''}])
        const [texts,setTexts] = useState([{text:""}])
        const [more, setMore] = useState(false)
        const [data,setData]  = useState({})
        const [refresh, setRefresh] = useState(true)
        

        useEffect(()=>{
                const fetchNotebooks = async()=>{
                        const raw = await fetch('http://191.252.186.178/journal',{
                                method:'POST',
                                headers:{
                                        'Content-Type':'application/json'
                                },
                                body:JSON.stringify({comando:0})
                        })

                        const result = await raw.json();

                       

                if(refresh==true){
                        setNotebooks(result)
                        setRefresh(false)
                }

                }
        
                // const fetchMore = async () =>{
                //         if(more==true){
                        
                //         const raw = await fetch('http://191.252.186.178/journal',{
                //                 method:'POST',
                //                 headers:{
                //                         'Content-Type':'application/json'
                //                 },
                //                 body:JSON.stringify({comando:2,notebook_id:page})
                //         })

                //         const data = await raw.json();
                                
                //                 setMore(false)
                //                 setTexts(data)
                //         }
                // }
                        const update = async()=>{
                        const raw = await fetch('http://191.252.186.178/journal',{
                                        method:'POST',
                                        headers:{
                                                'Content-Type':'application/json'
                                        },
                                        body:JSON.stringify(data)
                                })

                                const result = await raw.json();
                                console.log(result)

                               


                        }

                if(Object.keys(data)!=0) {
                
                        update()

                }

                        //fetchMore()
                        fetchNotebooks()

        },[page,data])
  return (

    <div className="App">
          <Container>

          <ThemeProvider 
                theme={theme.dark}>

          <GlobalStyle/>

          <Notebooks 

          chooseChapter = {(chapter)=>{
                  setMore(true)
                  setRefresh(true)
                  setPage(chapter)
          }}

          handleChange = {()=>{
                  const n = refresh == true?false:true
                  setRefresh(n)
          }}
                data = {notebooks}/>


          <Chapters 
                chapter = {page}
                handleChapter={
                        (newChapter)=>{
                                setChapter(newChapter) 
                        }} 
                data = {refresh}/>

          <Page 
          handleChange = {(newData)=>{
                  setData(newData)
                  setMore(true)
          }}
                data = {texts[chapter]==null?{text:""}:texts[chapter]}/>

          </ThemeProvider>

          </Container>
    </div>

  )
}

export default App
