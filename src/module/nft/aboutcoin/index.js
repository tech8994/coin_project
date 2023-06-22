import React from 'react';
import style from "./index.module.css";
import { coins_img } from '../../../assests';
import { Btn } from '../../../component';

export const AboutCoin = () => {
  return (
    <div className={`my-10 ${style.descService_nft}`}>
     <div className={`${style.nested_desc_section}`}>
       <div className={`${style.desc_img}`}>
        <img src={coins_img} alt="coins_img" />
       </div>
       <div className={`${style.desc_service}`}>
       <h1>These Coins Are You.</h1>
      <p>
      TELL YOUR STORY. As a member of the NFL Alumni family, your story is unique. The grit, determination, and perseverance of your playing days are still a part of you today. The game you played stays with you for a lifetime… KEEP IT ALIVE. Personalized DEDICATION COINS represent your experience and are the perfect way to share your story with others. Share your story and your coin to make a memorable statement.
        </p>
      <div className={style.btn_desc_section}>
            <Btn value={"let's Get Started"} />
          </div>
       </div>
     </div>
    </div>
  )
}
