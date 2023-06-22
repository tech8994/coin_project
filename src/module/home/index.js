import React from "react";
import style from "./index.module.css";
import { Header, SecondHeader, Footer } from "../../layout";
import { banner_video_gif } from "../../assests";
import { Contant_section } from "./contant_section";

export const Home = () => {
  return (
    <div>
    <div className={`w-full ${style.home_section}`}>    
      <Header />
      <SecondHeader />
      <div className={`${style.nested_home}`}>
        <div className={`${style.content_section}`}>
          <h1>These Coins <br/> Are You <span className={style.yellow}>.</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className={`${style.img}`}>
            <img src={banner_video_gif} alt="" />
        </div>
      </div>
    </div>
    <div className="w-full relative">
      <Contant_section/>
     <Footer/>
      </div>
    </div>
  );
};
