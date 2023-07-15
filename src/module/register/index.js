import React,{useState} from 'react';
import style from "./index.module.css"; 
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionRegister } from './topregister';
import { LoginFormReg } from './login_form';
import { Card } from '../service/card';


export const Register = () => {
    let data= "Register"
  return (
    <>
    <div className={style.register}>
      <Header />
      <SecondHeader />
      <div className={`${style.nested_register}`}>
      <TopSectionRegister data={data}/>
      </div>
    </div>
      <div>
       <LoginFormReg/> 
       <Card/>

      </div>
    <Footer/>

    </>
  )
}