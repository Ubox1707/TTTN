import React from 'react'
import './announcement.css'
import Bell from "../../img/bell-icon.png"

const Announcement = () => {
  return (
    <div className='announcement'>
      <img src={Bell} alt="Cái chuông" className="bell-icon" />
      <p className="bell-title">Thông báo</p>
    </div>
  )
}

export default Announcement
