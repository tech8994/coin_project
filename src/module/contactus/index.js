import React from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from '../../layout';
import { TopSectionContact } from './topsectioncontactus';
import { InfoSection } from './infosection';
import { ContactUsForm } from './contactus_form';
import { Card } from '../service/card';

export const ContactUs = () => {
  return (
    <>
    <div className={style.contactus}>
      <Header />
      <SecondHeader />
      <div className={`${style.nested_contactus}`}>
      <TopSectionContact/>
      </div>
     
    </div>
    <div>
    <InfoSection/>
    <ContactUsForm/>
    <div className=''>
    <Card/>
    </div>
    </div>
    <Footer/>

    </>
  )
}
