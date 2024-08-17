import React, {useState, useRef} from 'react'
import './profileModal.css'
import Close from "../../img/close-icon.png"
import ProvinceSelector from '../ProvinceSelector/ProvinceSelector'
import AvatarImg from "../../img/avt-icon.png"
import BackgroundImg from "../../img/photo-icon.png"
import Date from '../Date/Date'

const ProfileModal = ({onClose}) => {
  const [avatar, setAvatar] = useState(null);
  const [background, setBackground] = useState(null);

  const avatarInput = useRef(null)
  const backgroundInput = useRef(null)

  const handleAvatar = (event) => {
    setAvatar(event.target.files[0]);
  
  };

  const handleBackground = (event) => {
    setBackground(event.target.files[0]);
   
  };

  return (
    <div className="profile-modal">
        <div className="overlay" onClick={(event) => { event.stopPropagation(); onClose(); }}></div>
        <div className="modal-content">
          <img 
            src={Close} 
            alt="Icon đóng" 
            className="close-modal"
            onClick={(event) => { event.stopPropagation(); onClose(); }}/>
          <h1 className='pm-title'>Thông tin tài khoản</h1>
          
           <div className='pm-nickname'>
                <input type="text" name='nickname' placeholder='Tên hiển thị' className='info-input' />
            </div>
          <div className='pm-1'>
            {/* <Date className="date-of-birth"/> */}
            <select name="sex" className='pm-sex'>
              <option value="">Giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div className='pm-email'>
            <input type="text" name='email' className='info-input' placeholder='Email' />
          </div>
          <div className='live-in'>
            <ProvinceSelector/>
          </div>
          <div className='work-at'>
            <input type="text" placeholder='Làm việc tại' name="work-at" className="info-input" />
          </div>
          
          <div>
            <select name="relationship" className='pm-relationship' >
              <option value="" className='info-input'>Tình trạng mối quan hệ</option>
              <option value="single" className='info-input'>Độc thân</option>
              <option value="date" className='info-input'>Hẹn hò</option>
              <option value="married" className='info-input'>Đã kết hôn</option>
            </select>
          </div>
          <div className='profile-pic'>
            <div className="update-photo" onClick={() => avatarInput.current.click()}>
              {avatar ? (
                <img src={URL.createObjectURL(avatar)} alt="" className='update-img'/>
              )
              : (
                <img src={AvatarImg} alt=""/>
              )
              }
              <button className='button avatar-btn'> Chọn ảnh đại diện</button>
              
              <input 
              type="file" 
              name="profile-image" 
              style={{display: "none"}} 
              ref={avatarInput}
              onChange={handleAvatar}
              />
            </div>
            <div className="update-photo" onClick={() => backgroundInput.current.click()}>
            {background ? (
                <img src={URL.createObjectURL(background)} alt="" className='update-img'/>
              )
              : (
                <img src={BackgroundImg} alt=""/>
              )
              }
              <button className='button background-btn'>Chọn ảnh bìa</button>
              <input 
              type="file" 
              name="background-image" 
              style={{display: "none"}} 
              ref={backgroundInput}
              onChange={handleBackground}
              />
            </div>
          </div>
          <button className='button update-btn' onClick={(event) => { event.stopPropagation(); onClose(); }}>Cập nhật</button>
        </div>
    </div>
  )
}

export default ProfileModal
