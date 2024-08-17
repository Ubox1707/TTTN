import React, {useState, useRef} from 'react'
import './postArea.css'
import Avatar from '../../img/avt2.jpg'
import PhotoIcon from '../../img/photo-icon.png'
import LocateIcon from '../../img/locate-icon.png'
import SmileIcon from '../../img/smile-icon.png'
import CloseIcon from '../../img/close-icon.png'

const PostArea = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className='post-area'>
      <img src={Avatar} alt="Ảnh đại diện" />
      <div className="post-input">
        <input type="text" placeholder='Bạn đang nghĩ gì?' />
        <div className="post-option">
          <div className="option" style={{color: "var(--photo)"}}
          onClick={() => imageRef.current.click()}
          >
            <img src={PhotoIcon} alt="Icon ảnh" />
            Ảnh/Video
          </div>
          <div className="option" style={{color: "var(--location)"}}>
            <img src={LocateIcon} alt="Icon vị trí" />
            Vị trí
          </div>
          <div className="option" style={{color: "var(--video)"}}>
            <img src={SmileIcon} alt="Icon video" />
            Cảm xúc
          </div>
          <div className="option" style={{color: "var(--schedule)"}}>
            <img src={SmileIcon} alt="Icon mặt cười" />
            Cảm xúc
          </div>
          <button className="button ps-button">Đăng</button>
          <div style={{display: "none"}}>
            <input type="file" ref={imageRef} onChange={handleChange}/>
          </div>
        </div>
        {image && (
          <div className="preview-image">
            <img src={CloseIcon} alt="Icon X" onClick={() => setImage(null)} className='close-icon'/>
            <img src={image.image} alt="Ảnh" className='post-image'/>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default PostArea
