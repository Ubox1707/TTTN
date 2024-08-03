import React from 'react';
import './home.css';
import Menu from '../../components/Menu/Menu';
import RightSide from '../../components/RightSide/RightSide';


const Home = () => {
  return (
    <div className="Home">
        <Menu/>
        <div className="postSide">Post</div>
        <RightSide/>
    </div>
  )
}

export default Home
