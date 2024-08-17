import React from 'react'
import './postSide.css'
import { PostData } from '../../Data/PostData'
import NewPost from '../NewPost/NewPost'

const PostSide = () => {
  return (
    <div className='PostSide'>
      {PostData.map((post, id) =>{
        return <NewPost data={post} id={id}/>
      })}
    </div>
  )
}

export default PostSide
