import React from 'react';
import style from "./index.module.css";
import { Header, Footer, SecondHeader } from "../../../layout";
import { TopBanner } from "../banner_section";

export const UpdatePassowrd = () => {
    let data="Update  Password"

  return (
    <>
    <div className={`${style.UpdatePassowrd}`}>
         <Header />
        <SecondHeader />
        <div className={`${style.nested_userprofile}`}>
        <TopBanner data={data} />
        </div>
    </div>
    
      <div className={style.newPassword}>

          <form>
            <div className={style.oldPassword}>
               <label>Current Password</label> 
               <input type="password" placeholder='Current Password' />
            </div>
            <div className={`flex items-center my-5 gap-6 w-full ${style.newPassowrd}`}>
            <div>
               <label>New Password</label> 
               <input type="password" placeholder='New Password' />
            </div>
            <div>
               <label>Confirm Password</label> 
               <input type="password" placeholder='Confirm Password' />
            </div>
            </div>
            <div>
                <button>Submit</button>
            </div>
          </form>
      </div>
      <Footer/>
    </>
  )
}
