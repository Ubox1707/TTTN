import React from 'react'
import './userProfile.css'
import Menu from "../../components/Menu/Menu"
// import UserCard from '../../components/UserCard/UserCard'
// import Post from '../../components/Post/Post'
import ProfileArea from '../../components/ProfileArea/ProfileArea'
import RightSide from "../../components/RightSide/RightSide"

const UserProfile = () => {
  return (
    <div className='UserProfile'>
      <Menu/>
      <div className="profile-center">
        <ProfileArea/>
        {/* <UserCard/>
        <Post/> */}
      </div>
      <RightSide/>
    </div>
  )
}

export default UserProfile
