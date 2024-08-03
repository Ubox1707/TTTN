import React, {useRef} from 'react'
import Logo from '../../img/logo.png'

import './search.css'
const Search = () => {
  const inputRef = useRef(null);
  const handleInput = () =>{
    inputRef.current.focus();
  }
  return (
    <div className='search-bar'>
      <div className="top-bar">
        <img className='logo' src={Logo} alt="A pixel cat" />
        <h3 className='text-logo' style={{ fontFamily: 'Tittle, sans-serif' }}>Konism</h3>
      </div>
      <div className="search">
        <i className='ti-search' onClick={handleInput}></i>
        <input className='search-input' type="text" placeholder='Tìm kiếm...' ref={inputRef} />
      </div>
    </div>
  )
}

export default Search
