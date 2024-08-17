import React from 'react'
import './user.css'
import Avt from '../../img/avt2.jpg'

const User = () => {
  return (
    <div className='user'>
      <img src={Avt} alt="Ảnh đại diện" className="user-avt" />
      <div className="user-name">
        <span><b>Thịnh Đẹp trai</b></span>
        <span>@Thinhhandsome</span>
      </div>
    </div>
  )
}

export default User
