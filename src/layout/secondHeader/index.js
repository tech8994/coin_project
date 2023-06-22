import React from 'react';
import style from "./index.module.css";
import { NavLink } from 'react-router-dom';

export const SecondHeader = () => {
  return (
    <div className={`w-full ${style.Pages_links}`}>
     <div className={`${style.nested_pages}`}>
       <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li>
        </ul>        
     </div>
    </div>
  )
}
