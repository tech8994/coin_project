import React,{useEffect} from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionPhsical } from './topsectionphsical';
import { FormPhsicalCoin } from './form';
import { useNavigate } from 'react-router-dom';





export const PhsicalCoin = () => {

  let navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
    },[]);
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
