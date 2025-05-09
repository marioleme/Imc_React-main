import React from 'react'
import  './Button.css'
// import { useState } from 'react'

const button = ({id, text , action}) => {
    const handleAction = (e) => {
        action(e);
      
    }
  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default button