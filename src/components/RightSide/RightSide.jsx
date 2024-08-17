import React from 'react'
import './rightSide.css'
import User from '../User/User'
import TrendCard from '../TrendCard/TrendCard'
import FollowerCard from '../FollowerCard/FollowerCard'

const RightSide = () => {
  return (
    <div className='RightSide'>
        <User/>
        <TrendCard/>
        <FollowerCard/>
    </div>
  )
}

export default RightSide
