import React from 'react'
import { useState,useEffect } from 'react'

const MessageInput = () => {
    const [value,setValue] = useState()
    
  return (
    <>
    <input placeholder='Type your message...' value={value}/>
    <button onClick={()=>send(value)}></button>
    </>
  )
}

export default MessageInput