import React from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../../layout';
import { TopSectionRegister } from '../../register/topregister';
import { CiHeart } from "react-icons/ci";


export const SpecificNFT = ({speicficdata}) => {
    console.log(speicficdata);
    let data="NFT"
  return (
    <div>
          <div className={style.SpecificNFT}>
      <Header />
      <SecondHeader />
      <div className={`${style.nested_SpecificNFT}`}>
      <TopSectionRegister data={data}/>
      </div>
    </div>
    <div className={`${style.all_data}`}>
   <div className={style.nested_allData}>
    <div className={`py-6 flex gap-5  justify-between ${style.firstContent}`}>
     <div className={`w-full relative ${style.img}`}>
         <img src={speicficdata[0].img1} alt="img1" />
         <div className='absolute right-4 top-4 '>
          <CiHeart fontSize={"38px"}/>
         </div>
     </div>
     <div className={`w-full ${style.content_first}`}>
       <p className={`${style.content_first_desc}`}>{speicficdata[0].dec2}</p>
       <h4 className='text-3xl'>{speicficdata[0].desc1}</h4>
       <p className='text-xl'>Owner Dre Doy</p>
       <div className={`flex gap-8 ${style.box}`}>
        <div>
          <p className='text-xl'>Price</p>     
          <h3 className='text-5xl'>{speicficdata[0].dec2}</h3>
          <button>Buy Now</button>
          </div>
          <div className=''>
           <p className='my-2'>Auction Ends in</p>
             <span>408</span> <span>6</span> <span>34</span> <span>48</span>
          </div>
       </div>
       <div className={`${style.details} my-6`}>
        <h5 className='mt-4'>Details</h5>  
        <p className='my-5'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. If you are going to use a passage of Lorem Ipsum
        </p>
       </div>
       <div className={`${style.Characteristics}`}>
        <h5>Characteristics</h5>
        <div className='inline-flex flex-col'>
        <p className=''>Background</p>
        <p> 100%</p>
        </div>
       </div>
     </div>

     </div>
   </div>
    </div>
    <Footer/>
    </div>
  )
}
