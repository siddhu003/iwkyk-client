import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
// import Globe from '../../assets/globe.svg'
import icon from '../../assets/IWKYK-crop-icon-removebg-preview.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
          <nav className='side-nav'>
              <NavLink to='/' className='side-nav-links' activeClassName='side-nav-links'>
                  <p>Home</p>
              </NavLink>
              <div className='side-nav-div'>
                  <div><p>PUBLIC</p></div>
                  <NavLink to='/Questions' className='side-nav-links'>
                      <img src={icon} alt='icon' className='img-globe' activeClassName='side-nav-links' style={{width:"40px"}}/>
                      <p style={{paddingLeft:'10px'}}>Questions</p>
                  </NavLink>

                  <NavLink to='/Tags' className='side-nav-links' activeClassName='side-nav-links' style={{paddingLeft:'40px'}} >
                      <p>Tags</p>
                  </NavLink>

                  <NavLink to='/Users' className='side-nav-links' activeClassName='side-nav-links' style={{paddingLeft:'40px'}} >
                      <p>Users</p>
                  </NavLink>
              </div>
          </nav>
      
    </div>
  )
}

export default LeftSidebar
