import React from 'react';
import style from "./index.module.css";

export const FormPhsicalCoin = () => {
  return (
    <div className={style.form_section}>
       <div className={`${style.nested_form_Section}`}>
        <h1>Specs On Our Physical Coins</h1>
        <div className={`${style.selectBox_section}`}>
        
           <div className={`${style.nested_section_selectbox}`}>
            <div className={style.selectbox}>
              <label>Diameter 1.3/4 iches</label>
              <select>
                <option value="1inch">1 Inch</option>
                <option value="2inch">2 Inch</option>
                <option value="3inch">3 Inch</option>
                <option value="4inch">4 Inch</option>

              </select>
            </div>

            <div className={style.selectbox}>
              <label>Thickness: 1/8 inch</label>
              <select>
                <option value="1inch">1 Inch</option>
                <option value="2inch">2 Inch</option>
                <option value="3inch">3 Inch</option>
                <option value="4inch">4 Inch</option>

              </select>
            </div>


            <div className={style.selectbox}>
              <label>Weight: 1.3 oz</label>
              <select>
                <option value="1inch">1 Inch</option>
                <option value="2inch">2 Inch</option>
                <option value="3inch">3 Inch</option>
                <option value="4inch">4 Inch</option>

              </select>
            </div>


            <div className={style.selectbox}>
              <label>Composition: zinc alloy</label>
              <select>
                <option value="1inch">1 Inch</option>
                <option value="2inch">2 Inch</option>
                <option value="3inch">3 Inch</option>
                <option value="4inch">4 Inch</option>

              </select>
            </div>

           </div>
             <button>Place Order</button>


        </div>
       </div>
    </div>
  )
}
