import React, { useState } from 'react'
import paw from "../assets/Cat Footprint.svg";

export default function InputBox(props) {
    const {handlelist,value, setValue}= props
    const isEmpty = !value || value.trim() === '';

  return (
    <div className='inputBox'>
        <input
          value={value}
          onChange={(e)=> { setValue(e.target.value) }}
          placeholder="add next to-do item"
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isEmpty) {
              handlelist(value.trim());
              setValue('');
            }
          }}
        />
        <button
          onClick={() => {
            if (isEmpty) return;
            handlelist(value.trim());
            setValue('');
          }}
          disabled={isEmpty}
          aria-disabled={isEmpty}
        >Add <img src={paw} alt="paw" /></button>
    </div>
  )
}