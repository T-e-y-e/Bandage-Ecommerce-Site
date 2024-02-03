import React from 'react'
import HeaderBanner from '../Header-Banner'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <div className='sticky top-0 z-50'>
        <HeaderBanner />
        <Navbar />
    </div>
  )
}

export default Header
