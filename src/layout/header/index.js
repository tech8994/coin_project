import React from 'react';
import style from "./index.module.css";
import { logo } from '../../assests';
import {TfiEmail} from "react-icons/tfi";
import {BiPhone} from "react-icons/bi";
import {FaRegUser} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import { Sidebar } from '../sidebar';

export const Header = () => {
  return (
    <div className={`w-full ${style.header}`}>
      <div className={`${style.nested_header} flex justify-between items-center`}>
         <div className={`${style.logo}`}>
          <img src={logo} alt="logo" />
         </div>
         <div className={`${style.link_section}`}>
            <ul>
                <li className={`${style.first_name}`}>
                   <TfiEmail/>  
                   <div className={`${style.top_text}`} >
                      <p>Email Address</p>
                      <a href="#">YourInfo@gmail.com</a>
                   </div>
                </li>
                <li className={`${style.first_name}`}>
                   <BiPhone/>  
                   <div className={`${style.top_text}`} >
                      <p>Call Us</p>
                      <a href="#">123456780</a>
                   </div>
                </li>
                <li className={`${style.first_name}`}>
                   <FaRegUser/>  
                   <div className={`${style.top_text}`} >
                      <p>Hi Login!</p>
                      <a href="#">Your Account</a>
                   </div>
                </li>
                <li className={`${style.first_name} ${style.last_item}`}>
                   <AiOutlineShoppingCart/>  
                   <div className={`${style.top_text}`} >
                      <p>Add To</p>
                      <a href="#">Card</a>
                   </div>
                </li>
                <li>
                </li>
            </ul>
         </div>
         <div className={`${style.sidebar_responsive}`}>
          <div className={`flex items-center ${style.icons}`}>
          <FaRegUser className='text-2xl'/>  
          <AiOutlineShoppingCart className='text-2xl'/> 
          </div>
          <div>
          <Sidebar/>
          </div>
         </div>
      </div>
    </div>
  )
}

{/* <div className={`${style.first_section}`}>
    
    </div> */}