import React from 'react';
import style from "./index.module.css";
import { Footer, Header, SecondHeader } from '../../layout';
import { about_banner_video } from "../../assests";
import { Btn } from '../../component';
import { AboutDesc } from './about_data';


export const About = () => {
  return (
    <div>
    <div className={`w-full ${style.about_page}`}>
         <Header />
      <SecondHeader />
        <div className={`${style.nested_about}`}>
        <div className={`w-full ${style.content_section_about}`}>
          <h1>Get Started<span className={style.yellow_about}>.</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className={style.btn_about}>
            <Btn value={"let's Get Started"} />
          </div>
        </div>
        <div className={`w-full ${style.img_about}`}>
            <img src={about_banner_video} alt="about_banner_video" />
        </div>
    </div>
        </div>
        <div>
            <AboutDesc/>
            <Footer/>
        </div>
        </div>
  )
}
