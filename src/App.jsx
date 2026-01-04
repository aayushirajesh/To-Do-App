import { useState, useEffect } from "react"
import InputBox from "./components/InputBox"
import List from "./components/List"
import Header from "./components/Header"

function App() {
  const [list, setlist] = useState([])
  const [value, setValue] = useState('')

  function persistData(newtodolist){
    localStorage.setItem('list', JSON.stringify({list: newtodolist}))
  }

  function handlelist(newtodo){
    const newlist = [...list, newtodo]
    persistData(newlist)
    setlist(newlist)
  }
  
  function handledelete(index){
    const newlist = list.filter((list, listIndex)=> {
      return listIndex !== index
    })
    persistData(newlist)
    setlist(newlist)
    
  }
  function handleedit(index){
    const valuetobeEdited = list[index]
    setValue(valuetobeEdited)
    handledelete(index)
  }

  useEffect(()=>{
    if (!localStorage) {
      return
    }
    let localTools = localStorage.getItem('list')
    if (localTools) {
      localTools = JSON.parse(localTools).list
      setlist(localTools)
    }
  },[])
  
  return (
    <>
      <Header/>
      <div className="listCard"><InputBox value={value} setValue={setValue} handlelist={handlelist}/>     {/* props=handlelist */}
      <List handleedit={handleedit} handledelete={handledelete} list={list}/>    {/* props=list */}</div>
    </>
  )
}

export default App
