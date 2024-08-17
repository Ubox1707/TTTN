import React from 'react'
import './mess.css'
import ChatIcon from "../../img/chat-icon.png"

const Mess = () => {
  return (
    <div className='mess'>
      <img src={ChatIcon} alt="Chat Icon" className="chat-icon" />
      <p className="mess-title">Tin nhắn</p>
    </div>
  )
}

export default Mess
