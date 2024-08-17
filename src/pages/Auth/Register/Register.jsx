import React from 'react'
import './register.css'
import Logo from "../../../img/logo.png"

const Register = () => {
  return (
    <div className='Register'>
        <div className="register-container">
            <div className="register-left">
                <h1 className='register-title' style={{fontFamily: 'Roboto, sans-serif'}} >ĐĂNG KÝ</h1> 
                
                <div>
                    <input type="text" name='username' placeholder='Tên đăng nhập' className='info-input' />
                </div>
                <div>
                    <input type="text" name='nickname' placeholder='Tên hiển thị' className='info-input' />
                </div>
                <div>
                    <input type="password" name='password' placeholder='Nhập mật khẩu' className='info-input' />
                </div>
                <div>
                    <input type="password" name='password' placeholder='Nhập lại mật khẩu' className='info-input' />
                </div>
                
                <div>
                    <input type="text" name='register-mail' placeholder='Nhập email' className='info-input'/>
                </div>
                <button className='button register-btn'>ĐĂNG KÍ</button>
                <button className='button register-btn'>ĐĂNG NHẬP</button>
                    
            </div>
            <div className="register-right">
                <img src={Logo} alt="" className='register-logo'/>
                <h1 className='register-web-name' style={{ fontFamily: 'Tittle, sans-serif' }}>Konism</h1>
               
            </div>
        </div>
    </div>
  )
}

export default Register
