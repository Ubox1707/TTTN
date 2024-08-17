import React from 'react'
import './trendCard.css'
import { TrendData } from '../../Data/trendData'

const TrendCard = () => {
  return (
    <div className='trend-card'>
      <h1>Top Trending</h1>
        {TrendData.map((data, id) => {
          return (
            <div className="trend-hastag">
              <span>#{data.name}</span>
              <span>{data.shares} lượt chia sẻ</span>
            </div>
          )
        })}
      
    </div>
  )
}

export default TrendCard
