import React from 'react'
import './post.css'
import PostArea from '../PostArea/PostArea'
import PostSide from '../PostSide/PostSide'


const Post = () => {
  return (
    <div className='Post'>
      <PostArea/>
      <PostSide/>
    </div>
  )
}

export default Post
