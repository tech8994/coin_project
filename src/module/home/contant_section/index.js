import React from "react";
import { coin_img_1, coin_img_2 } from "../../../assests";
import style from "./index.module.css";
import {Btn} from "../../../component";
import { NavLink } from "react-router-dom";
export const Contant_section = () => {
  return (
    <div className={`${style.Contant_section}`}>
      <div className={`${style.nested_contact_section}`}>
        <div className={`flex justify-center gap-5 items-center ${style.photo}`}>
          <div className="">
            <NavLink to="/physical-coin" className="relative flex justify-center">
              <img src={coin_img_1} alt="coin_img_1" />
              <p className="absolute bottom-0 text-center">Physical Coin</p>
            </NavLink>
          </div>
          <div>
            {/* <a href="#" > */}
              <NavLink to={"/digital-coin"} className="relative flex justify-center">
              <img src={coin_img_2} alt="coin_img_2" />
              <p className="absolute bottom-0 text-center">Digital NFT</p>
              </NavLink>
            {/* </a> */}
          </div>
        </div>
        <div className={`${style.desc_section} my-12`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet libero vel elementum facilisis. Duis non turpis erat.
            Phasellus quis enim pellentesque, eleifend felis in, convallis arcu.
            Praesent maximus dictum nunc vitae mattis. Nulla dictum dapibus
            eros, sit amet consequat urna euismod sit amet. Vestibulum
            condimentum felis elit, vel placerat tortor malesuada eget. Aliquam
            erat volutpat. Aenean tristique tristique elit, vitae malesuada
            ipsum vulputate nec. Ut placerat nisi ut sem rutrum pulvinar. Etiam
            sed lorem ac purus egestas consequat. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Integer
            finibus faucibus arcu quis vehicula. Aliquam velit mi, interdum
            consequat elementum et, fermentum non libero. Nunc pulvinar tellus
            facilisis, ultrices arcu vel, cursus nisi.
          </p>
          <p>
            Aliquam lectus ante, fermentum a auctor at, tristique eu sapien.
            Nunc rutrum ac diam sed hendrerit. Fusce at neque dignissim, egestas
            libero eget, fringilla turpis. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Proin ut nisl
            turpis. Aenean at tellus id dui rutrum tincidunt. In placerat metus
            id libero ultrices, nec mattis neque varius. Cras sagittis ipsum
            nisi, id dignissim velit luctus ut.
          </p>
          <div className={`my-7 flex justify-center items-center ${style.btn_getStarted}`}>
            <Btn value={"let's Get Started"}  />
          </div>
        </div>
      </div>
    </div>
  );
};
