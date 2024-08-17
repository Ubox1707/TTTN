import React from 'react'
import './followerCard.css'
import { Follower } from '../../Data/temptData'

const FollowerCard = () => {
  return (
    <div className='follower-card'>
        <h1 className="follower-title">Gợi ý cho bạn</h1>
        {Follower.map((follower, id)=>{
          return(
            <div className="follower" key={follower.id} >
              <div>
                <img src={follower.img} alt="Ảnh đại diện" className='follower-avt'/>
                <div className="follower-name">
                  <span >{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
              <button className="button fc-button">
                Follow
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default FollowerCard
