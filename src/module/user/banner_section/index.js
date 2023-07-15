import React from 'react';
import style from "./index.module.css";
import { Btn } from '../../../component';

export const TopBanner = ({data}) => {
  return (
    <div className={`py-10 ${style.banner_section}`}>
      <div className={`${style.content}`}>
      <h1>{data && data}<span className={style.yellow_service}>.</span></h1>
      </div>  
    </div>
  )
}
