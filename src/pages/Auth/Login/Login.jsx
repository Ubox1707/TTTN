import React from 'react'
import './login.css'
import Logo from "../../../img/logo.png"


const Login = () => {
  return (
    <div className='Login'>
        <div className="login-container">
            <div className="login-left">
                <img src={Logo} alt="" className='login-logo'/>
                <h1 className='login-web-name' style={{ fontFamily: 'Tittle, sans-serif' }}>Konism</h1>
            </div>
            <div className="login-right">
                <h1 className='login-title' style={{fontFamily: 'Roboto, sans-serif'}} >ĐĂNG NHẬP</h1> 
                
                <div>
                    <input type="text" name='nickname' placeholder='Tên đăng nhập' className='login-input' />
                </div>
                
                <div>
                    <input type="password" name='password' placeholder='Nhập mật khẩu' className='login-input' />
                </div>
                <p>Chưa có tài khoản? <a href="#" className='login-link'>Đăng ký ngay</a></p>
                <button className='button login-btn'>ĐĂNG NHẬP</button> 
            </div>
        </div>
    </div>
  )
}

export default Login
