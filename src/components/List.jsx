import React from 'react'
import Card from './Card'

export default function List(props) {
    const { list } = props
  return (
    <ul className='main'>
       {list.map((list, listIndex)=>{
            return(
                <Card {...props} key={listIndex} index={listIndex}>
                    <p>{list}</p>
                </Card>
            )
       })} 
    </ul>
  )
}
