import React from 'react'
import './profile.css'
import  ProfilePic from '../../img/mykoni.png'

const Profile = () => {
  return (
    <div className='profile'>
      <img className='profile-icon' src={ProfilePic} alt="Một con mèo" />
       <h2 className="profile-title" style={{ fontFamily: 'Tittle, sans-serif' }}>My Koni</h2>
    </div>
  )
}

export default Profile
