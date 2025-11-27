import React from 'react'
import "./Nav.css"
import logo from "../../assets/logo.png.png"

const Nav = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src={logo} alt="" width={35}/>
          <h2>TreatMeals</h2>
        </div>
       <div className='nav-content'>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li></li>
          </ul>
          <div className='login'>
            <p>Login</p>
            <button className='btn'>Sign Up</button>
          </div>
       </div>
      </nav>
    </div>
  )
}

export default Nav
