import React from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionRegister } from '../register/topregister';
import { AllNFTS } from './allnfts';


export const DigitalCoin = ({datas, setId}) => {
   let data="Digital Coin"
  return (
    <div>
         <div className={style.digital_Coin}>
      <Header />
      <SecondHeader />
      <div className={`${style.nested_digitalcoin}`}>
      <TopSectionRegister data={data}/>
      </div>
    </div>
    <div>
        <AllNFTS datas={datas} setId={setId}/>
    </div>
    <Footer/>

        
    </div>
  )
}
