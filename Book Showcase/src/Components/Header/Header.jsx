import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchFrom from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Find your preferred book..</h2>
          <br />
          <p className='header-text fs-18 fw-3'> You have stnpepped into your book! Here, you will search for your door that opens in the book and you will be able to easily find all the books you are looking for. Just enter your book name, get book descriptions and detailed information immediately. Enjoy reading! </p>
        <SearchFrom/>


        </div>
      </header>
    </div>
  )
}

export default Header