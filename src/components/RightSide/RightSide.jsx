import React from 'react'
import './rightSide.css'
import FollowerCard from '../FollowerCard/FollowerCard'

const RightSide = () => {
  return (
    <div className='RightSide'>
        <div><h1>User</h1></div>
        <div><h1>Trend Card</h1></div>
      <FollowerCard/>
    </div>
  )
}

export default RightSide
