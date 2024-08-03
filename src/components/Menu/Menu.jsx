import React from 'react'
import './menu.css'
import Search from '../Search/Search'
import Home from '../Home/Home'
import Announcement from '../Announcement/Announcement'
import Mess from '../Mess/Mess'
import Information from '../Information/Information'
import Profile from '../Profile/Profile'
import PostBtn from '../PostBtn/PostBtn'
import Logout from '../Logout/Logout'

const Menu = () => {
  return (
    <div className='Menu'>
      <Search/>
      <Home/>
      <Announcement/>
      <Mess/>
      <Information/>
      <Profile/>
      <PostBtn/>
      <Logout/>
    </div>
  )
}
export default Menu
