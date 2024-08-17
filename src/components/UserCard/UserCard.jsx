import React from 'react'
import './userCard.css'
import Background from "../../img/avt.jpg"
import Avt from "../../img/avt2.jpg"

const UserCard = () => {
  return (
    <div className='user-card'>
      <div className="user-img">
        <img src={Background} alt="Ảnh nền" className="user-background" />
        <img src={Avt} alt="Ảnh đại diện" className="user-avatar" />
      </div>
      <div className="user-names">
        <span>Thịnh Đẹp Trai</span>
        <span>Thực tập sinh IT</span>
      </div>
      <div className="following-state">
        <hr />
        <div>
          <div className="following">
            <span>6098</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="following">
            <span>60</span>
            <span>Follower</span>
          </div>
          <div className="vl"></div>
          <div className="following">
            <span>6</span>
            <span>Post</span>
          </div>
        </div>
        <hr />
      </div>
    </div>

  )
}

export default UserCard
