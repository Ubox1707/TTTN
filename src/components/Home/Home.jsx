import React from 'react'
import './home.css'
import HomeIcon from "../../img/home-icon.png"


const Home = () => {
  return (
    <div className='home'>
      <img src={HomeIcon} alt="A pixel house" className="home-icon" />
      <p className="home-title">Trang chủ</p>
    </div>
  )
}

export default Home
