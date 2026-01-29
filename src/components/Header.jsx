import React from 'react'
import Cat from "../assets/Cat.svg";
import min from "../assets/min.svg";
import exit from "../assets/exit.svg";



export default function Header() {
  return (
    <div className="header">
        <img className='CatIcon' src={Cat} alt="Cat" />
        <p className='appHeading' >To-Do List</p>
        <div className='windowControls'><img className='minIcon' src={min} alt="min" onClick={()=>{
            window.electronAPI?.minimizeWindow();
        }}/>
        <img className='exitIcon' src={exit} alt="exit" onClick={()=>{
            window.electronAPI?.closeWindow();
        }}/></div>
    </div>
  )
}
