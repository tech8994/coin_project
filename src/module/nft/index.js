import React from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionNFT } from './topSectionnft';
import { Card } from '../service/card';
import { AboutNFT } from './aboutnft';
import {IoIosArrowDroprightCircle} from "react-icons/io"
import { Product_Section_NFT } from './nftproduct';
import { AboutCoin } from './aboutcoin';
import { ShoppingInfo } from './shoppinginfo';

export const NFT = () => {
  return (
    <div>
    <div className={style.nft_section}>
         <Header />
      <SecondHeader />
    <div className={`${style.nested_nft_section}`}>
    <TopSectionNFT/>
    </div>
    </div>
      <div>
        <AboutNFT/>
        <div className={`${style.contact_desc_nft}`}>
       <div className={`${style.nested_contact_desc_nft}`}>
          <ul className={`flex gap-4 items-center`}>
            <li><a href="#">New sale Season - Up to 20%</a></li>
            <li><a href="#" className='flex items-center'>SHOP NOW <IoIosArrowDroprightCircle/> </a></li>
            </ul>      
            <a href="+1 202 234 556"> <span className={`${style.customer_section_nft}`}>Customer Care Services:</span>  +1 202 234 556</a>
        </div> 
    </div>
    <Product_Section_NFT/>
    <AboutCoin/>
    <ShoppingInfo/>
     <Card/>
      </div>
    <Footer/>
    </div>
  )
}
