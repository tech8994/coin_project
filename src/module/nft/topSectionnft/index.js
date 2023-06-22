import React from 'react';
import style from "./index.module.css";
import { Btn } from '../../../component';

export const TopSectionNFT = () => {
  return (
    <div className={`py-10 ${style.topSection}`}>
      <div className={`${style.content}`}>
      <h1>NFT<span className={style.yellow_service}>.</span></h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      <div className={style.btn_top_section}>
            <Btn value={"let's Get Started"} />
          </div>
      </div>  
    </div>
  )
}
