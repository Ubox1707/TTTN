import React from 'react'
import './logout.css'
import ExitIcon from "../../img/exit-icon.png"

const Logout = () => {
  return (
    <div className='logout'>
     <img src={ExitIcon} alt="Exit Icon" className="exit-icon" />
      <p className="logout-title">Đăng xuất</p>
    </div>
  )
}

export default Logout
