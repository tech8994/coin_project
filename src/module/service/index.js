import React from 'react';
import { Header, Footer, SecondHeader } from '../../layout';
import { DescService } from './desc_service';
import style from "./index.module.css";
import { TopSection } from './topsection';
import {IoIosArrowDroprightCircle} from "react-icons/io";
import {SearchSection} from "./search_section";
import { Description_section } from './description_section';
import { Product_Section } from './product_section';
import { Card } from './card';



export const Service = () => {
  return (
    <>
    <div className={style.service}>
      <Header />
      <SecondHeader />
      <div className={`${style.nested_service}`}>
      <TopSection/>
      </div>
    </div>
    <div className={style.comp}>
        <DescService/>
    </div>
    <div className={`${style.contact_desc}`}>
       <div className={`${style.nested_contact_desc}`}>
          <ul className={`flex gap-4 items-center`}>
            <li><a href="#">New sale Season - Up to 20%</a></li>
            <li><a href="#" className='flex items-center'>SHOP NOW <IoIosArrowDroprightCircle/> </a></li>
            </ul>      
            <a href="+1 202 234 556"> <span className={`${style.customer_section}`}>Customer Care Services:</span>  +1 202 234 556</a>
        </div> 
    </div>
       <div>
        <SearchSection/>
        <Description_section/>
        <Product_Section/>
        <Card/>
       </div>
      <Footer/>
    </>
  )
}

