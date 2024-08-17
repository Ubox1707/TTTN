import React, { useState } from 'react'
import './infomation.css'
import UserIcon from "../../img/user-icon.png"
import ProfileModal from '../ProfileModal/ProfileModal'

const Information = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const closeModal = () => {
    setModalOpened(false)
  }

  return (
    <div className='information' onClick={() => setModalOpened(true)}>
      {modalOpened && (
        <ProfileModal onClose ={closeModal}/>
      )}
      
      <img src={UserIcon} alt="User Icon" className="user-icon" />
      <p className="info-title">Thông tin tài khoản</p>
     
    </div>
  )
}

export default Information
