import React from 'react'
import "./index.css";

export const Sidebar = () => {
  return (
    <div className='side_section'>
        <nav role='navigation'>
  <div id="menuToggle">
    
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Service</li></a>
      <a href="#"><li>Register</li></a>
      <a href="#"><li>Contact Us</li></a>
    </ul>
  </div>
</nav>
    </div>
  )
}
