import React from 'react';
import './home.css';
import Menu from '../../components/Menu/Menu';
import RightSide from '../../components/RightSide/RightSide';
import Post from '../../components/Post/Post';

const Home = () => {
  return (
    <div className="Home">
        <Menu/>
        <Post/>
        <RightSide/>
    </div>
  )
}

export default Home
