import React from 'react'
import './profileArea.css'
import UserCard from "../UserCard/UserCard"
import Post from "../Post/Post"


const ProfileArea = () => {
  return (
    <div className='profile-area'>
      <UserCard/>  
      <Post/>
    </div>
  )
}

export default ProfileArea
