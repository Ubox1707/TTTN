import React from 'react'
import './newPost.css'
import Like from '../../img/like.png'
import Dislike from '../../img/dislike.png'
import Comment from '../../img/comment-icon.png'
import Share from '../../img/share-icon.png'

const NewPost = ({data}) => {
  return (
    <div className='new-post'>
      <div className="post-content">
        <img src={data.img} alt="Ảnh" className='post-img'/>
      </div>
      <div className="post-communicate">
        <img src={data.liked?Like:Dislike} alt="Icon trái tym" />
        <img src={Comment} alt="Icon bình luận" />
        <img src={Share} alt="Icon chia sẻ" />
      </div>
      <span className='post-likes'>{data.likes} likes</span>
      <div className="post-status">
        <span><b>{data.name}</b> {data.desc}</span>
      </div>
    </div>
  )
}

export default NewPost
