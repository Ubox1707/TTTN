import React, { useState } from 'react'
import './postBtn.css'
import PostModal from '../PostModal/PostModal'

const PostBtn = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const closeModal = () => {
    setModalOpened(false)
  }
  return (
    <div className='post-btn' onClick={() => setModalOpened(true)}>
      {modalOpened && (
        <PostModal onClose ={closeModal}/>
      )}
      <p className="post-btn-title">Post</p>
    </div>
  )
}

export default PostBtn
