import React from 'react';
import { mail_icon, map_icon,phone_icon } from '../../../assests';
import style from "./index.module.css";


export const InfoSection = () => {
  return (
    <div className={style.info_section}>
       <div className={`flex gap-4  justify-between items-center ${style.nested_info_section}`}>
          {/* card one  */}
          <section className={`w-full flex flex-col gap-7 justify-center items-center ${style.card_info}`}>
           <div className={`${style.logo}`}>
              <img src={phone_icon} alt="phone_icon" /> 
           </div>
           <div className={`${style.desc}`}>
             <a href="#">+1(000)-000-000</a>
           </div>
          </section>

{/* card one  */}
<section className={`flex flex-col gap-8 justify-center items-center w-full ${style.card_info}`}>
           <div className={`${style.logo}`}>
              <img src={mail_icon} alt="mail_icon" /> 
           </div>
           <div className={`${style.desc}`}>
             <a href="#">+1(000)-000-000</a>
           </div>
          </section>

          {/* card one  */}
          <section className={`flex flex-col gap-7 justify-center items-center w-full ${style.card_info}`}>
           <div className={`${style.logo}`}>
              <img src={map_icon} alt="map_icon" /> 
           </div>
           <div className={`${style.desc}`}>
             <a href="#">+1(000)-000-000</a>
           </div>
          </section>
       </div>
    </div>
  )
}
