import React from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionPhsical } from './topsectionphsical';
import { FormPhsicalCoin } from './form';

export const PhsicalCoin = () => {
  return (
    <>
    <div className={style.phsical_coin}>
            <Header />
      <SecondHeader />
    <div className={style.nested_phsical_coin}>
    <TopSectionPhsical/>
    </div>
    </div>
    <FormPhsicalCoin/>
    <Footer/>
    </>
  )
}
