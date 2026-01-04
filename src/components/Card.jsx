import React from 'react'
import edit from "../assets/Edit.svg"
import del from "../assets/Trash.svg"

export default function Card(props) {
    const { children, handledelete, index, handleedit } = props
  return (
    <li className='todoItem' >
        {children}     {/* shows the text of the to-do, i.e. the <p>{list}</p> element from List*/ }
        <div className='editDel'>
            <button onClick={()=>{handleedit(index)}}><img src={edit} alt="Edit" /></button>
            <button onClick={()=>{handledelete(index)}}><img src={del} alt="Delete" /></button>
        </div>
    </li>
  )
}
