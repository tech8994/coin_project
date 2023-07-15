import React from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../../layout';
import { TopSectionRegister } from '../../register/topregister'; 
import { img_coin } from '../../../assests';

export const CoinSection = () => {
    let data= "Digital Coin"
  return (
    <>
    <div className={`${style.coing_section}`}>
    <Header />
    <SecondHeader />
    <div className={`${style.nested_coin_section}`}>
    <TopSectionRegister data={data}/>
    </div>
    </div>
    <div className={`flex gap-5 items-center ${style.img_Section}`}>
         <div>
            <img src={img_coin} alt="img_coin" />
        </div>  
        <div>
            <img src={img_coin} alt="img_coin" />
        </div>  
        <div>
            <img src={img_coin} alt="img_coin" />
        </div>  
    </div>
    </>
  )
}
