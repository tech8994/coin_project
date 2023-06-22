import React from 'react';
import { ftr_logo, payment } from '../../assests';
import style from "./index.module.css";
import {MdLocationOn} from "react-icons/md";
import {BiPhone} from "react-icons/bi";
import {TfiEmail} from "react-icons/tfi";
import {FaFacebookF} from "react-icons/fa";
import {FaPinterestP} from "react-icons/fa";
import {ImTwitter} from "react-icons/im";
import {FaGooglePlusG} from "react-icons/fa";
import { NavLink } from 'react-router-dom';





export const Footer = () => {
  return (
    <div className={style.footer_section}>
        <div className={style.second_section}>
        <div className={style.nested_footer}>
            {/* section one */}
           <div className={style.footer_content}>
             <div className={style.img}>
                <img src={ftr_logo} alt="ftr_logo" />
             </div>
             <div>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
               <ul>
                <li><a href="#"><MdLocationOn/> lorem Ipsum Dolor</a></li>
                <li><a href="#"><BiPhone/> +1(000)-000-000</a></li>
                <li><a href="#"><TfiEmail/> info@gmail.com</a></li>
               </ul>
             </div>
           </div>
           {/* section two */}
           <div className={`${style.footer_content}`}>
              <h3>My Account</h3>         
              <ul className={`${style.section_one}`}>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Frequantly Asked Questions</a></li>
                <li><a href="#">Checkout</a></li>

               </ul>
           </div>
           {/* section three */}
           <div className={`${style.footer_content}`}>
           <h3>Quick Links</h3>         
              <ul className={`${style.section_one}`}>
                <li><NavLink  to="/">Home</NavLink></li>
                <li><NavLink to="/aboutus">About Us</NavLink></li>
                <li><NavLink to="/services">Service</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>

               </ul>
           </div>
           {/* section four */}
           <div className={`${style.footer_content}`}>
           <h3>Follow Us</h3>         
              <ul className={`${style.section_one}`}>
                <li><a href="#"> <FaGooglePlusG/> Google+</a></li>
                <li><a href="#"> <ImTwitter/> Twitter</a></li>
                <li><a href="#"> <FaFacebookF/> Facebook</a></li>
                <li><a href="#"> <FaPinterestP/> Pinterest</a></li>
               </ul>
               <h3>Payment Method</h3>
               <div>
                <img src={payment} alt="payment" />
               </div>
           </div>
        </div>
        {/* another section */}
        <div className={`${style.links_footer} my-12`}>
             <ul className='flex justify-center items-center gap-7'>
                 <li><a href="#">Sitemap</a></li>
                 <li><a href="#">Searchs</a></li>
                 <li><a href="#">Searchs</a></li>
                 <li><a href="#">Advance</a></li>
                 <li><a href="#">Searchs</a></li>
                 <li><a href="#">Contact US</a></li>
             </ul>
             <p className='text-center my-4'>Copyright © 2023 Your Domain Name | All Rights Reserved.</p>
        </div>
        </div>
    </div>
  )
}
