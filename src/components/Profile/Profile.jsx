import React from 'react'
import './profile.css'
import  ProfilePic from './mykoni.png'

const Profile = () => {
  return (
    <div className='profile'>
      <img className='ti-profile' src={ProfilePic} alt="A pixel cat" />
       <h2 className="profile-title" style={{ fontFamily: 'Tittle, sans-serif' }}>My Koni</h2>
    </div>
  )
}

export default Profile
